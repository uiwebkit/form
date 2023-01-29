import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, Observable, of, startWith } from 'rxjs';

import { UniFormField } from '../../../../models/interfaces/form-field.model';
import { UniFormFieldGroup } from '../../../../models/interfaces/form-field-group.model';
import { UniFormFieldOption } from '../../../../models/interfaces/form-field-option.model';
import { UniAutocompleteMatService } from './autocomplete-mat.service';
import { isArray } from '../../../../utils/is';

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
  chips: any[] = [];
  autoCtrl = new FormControl({ value: '', disabled: true }, [Validators.required]);
  groups$: Observable<UniFormFieldGroup[]> = of([]);
  options$: Observable<UniFormFieldOption[]> = of([]);

  constructor(
    private formBuilder: FormBuilder,
    private autoService: UniAutocompleteMatService,
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
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

    if (this.field.value) {
      this.chips = isArray(this.field.value) ? this.field.value as string[] : [this.field.value as string];
    }

    if (this.field.multi && this.formGroup.get(this.field.key)?.value) {
      this.chips = this.formGroup.get(this.field.key)?.value;
    }
  }

  isSelected(value: string | number = ''): boolean {
    return this.chips.includes(value + '');
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    const formattedValue = this.autoService.getFormattedValue(this.field.groups, this.field.options, value);

    if (formattedValue) {
      this.chips.push(formattedValue);
      this.formGroup.patchValue({ [this.field.key]: this.chips });
    }

    // Clear the input value
    event.chipInput!.clear();
    this.autoCtrl.setValue('');
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.field.multi && this.autoInput) {
      const value = event.option.value;
      const notPresent = this.chips.filter((chip: string) => chip.toLowerCase() === value.toLowerCase()).length === 0;

      if (notPresent) {
        this.chips.push(value);
        this.formGroup.patchValue({ [this.field.key]: this.chips });
      }

      this.autoInput.nativeElement.value = '';
      this.autoCtrl.setValue('');
    }
  }

  remove(chip: string): void {
    const index = this.chips.indexOf(chip);

    if (index >= 0) {
      this.chips.splice(index, 1);
      this.formGroup.patchValue({ [this.field.key]: this.chips });
    }

    this.autoCtrl.setValue('');
  }

  onBlur(event: any): void {
    event.preventDefault();

    this.formGroup.patchValue({
      [this.field.key]: this.autoService.getFormattedValue(this.field.groups, this.field.options, event.target.value) || '',
    });
  }
}
