import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, Observable, of, startWith } from 'rxjs';

import { UniFormField } from '../../../../models/interfaces/form-field.model';
import { UniFormFieldGroup } from '../../../../models/interfaces/form-field-group.model';
import { UniFormFieldOption } from '../../../../models/interfaces/form-field-option.model';
import { isArray } from '../../../../utils/is';
import { UniAutocompleteMatService } from './autocomplete-mat.service';

@Component({
  selector: 'uni-autocomplete-mat',
  templateUrl: './autocomplete-mat.component.html',
  styles: ['.active {background: #DDD;}']
})
export class UniAutocompleteMatComponent implements OnInit {

  @Input()
  field: UniFormField = { key: '', type: 'autocomplete' };

  @Input()
  formGroup: FormGroup;

  @ViewChild('autoInput')
  autoInput?: ElementRef<HTMLInputElement>;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  chips: string[] = [];
  values: string[] = [];
  autoCtrl = new FormControl({ value: '', disabled: true });
  groups$: Observable<UniFormFieldGroup[]> = of([]);
  options$: Observable<UniFormFieldOption[]> = of([]);

  constructor(
    private formBuilder: FormBuilder,
    private autoService: UniAutocompleteMatService,
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    const disabled: boolean = this.field.disabled || false;
    const validators = this.field.required ? { validators: Validators.required } : {};
    this.autoCtrl = new FormControl({ value: '', disabled }, validators);
    const formField = this.field.multi ? this.autoCtrl : this.formGroup.get(this.field.key);

    if (this.field.groups) {
      this.groups$ = formField!.valueChanges
        .pipe(
          startWith(''),
          map((value: string) => this.autoService.filterGroups(this.field.groups, value)),
        );
    } else if (this.field.options) {
      this.options$ = formField!.valueChanges
        .pipe(
          startWith(''),
          map((value: string) => this.autoService.filterValue(this.field.options, value)),
        );
    }

    if (this.field.multi) {
      if (this.field.value) {
        console.log(this.field.value)
        this.chips = isArray(this.field.value) ? this.field.value as string[] : [this.field.value as string];
        this.values = isArray(this.field.value) ? this.field.value as string[] : [this.field.value as string];
      }

      if (this.formGroup.get(this.field.key)?.value) {
        console.log(this.formGroup.get(this.field.key)?.value)
        this.chips = [...this.formGroup.get(this.field.key)?.value];
        this.values = [...this.formGroup.get(this.field.key)?.value];
      }
    }
  }

  isSelected(value: string | number = ''): boolean {
    return this.values.includes(value + '');
  }

  add(event: MatChipInputEvent): void {
    const label: string = this.autoService.getLabelByValue(this.field.groups, this.field.options, (event.value || '').trim());
    console.log(1, label, (event.value || '').trim());

    if (label && !this.chips.includes(label)) {
      this.chips.push(label);
      this.values.push((event.value || '').trim());
      this.formGroup.patchValue({ [this.field.key]: this.values});
    }

    // Clear the input value
    event.chipInput!.clear();
    this.autoCtrl.setValue('');
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.field.multi && this.autoInput) {
      const label: string = this.autoService.getLabelByValue(this.field.groups, this.field.options, event.option.value);
      console.log(2, label, event.option.value);

      if (label && !this.chips.includes(label)) {
        this.chips.push(label);
        this.values.push(event.option.value);
        this.formGroup.patchValue({ [this.field.key]: this.values });
      }

      this.autoInput.nativeElement.value = '';
      this.autoCtrl.setValue('');
    }
  }

  remove(value: string): void {
    const index: number = this.chips.findIndex((chip: string): boolean => chip === value);

    if (index >= 0) {
      this.chips.splice(index, 1);
      this.values.splice(index, 1);
      this.formGroup.patchValue({ [this.field.key]: this.values });
    }

    this.autoCtrl.setValue('');
  }

  onBlur(event: any): void {
    event.preventDefault();
    const label: string = this.autoService.getLabelByValue(this.field.groups, this.field.options, event.target.value);
    console.log(3, label, event.target.value);

    this.formGroup.patchValue({[this.field.key]: label || ''});
  }
}
