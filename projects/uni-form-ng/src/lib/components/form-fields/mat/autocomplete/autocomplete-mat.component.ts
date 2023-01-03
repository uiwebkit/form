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

@Component({
  selector: 'uni-autocomplete-mat',
  templateUrl: './autocomplete-mat.component.html',
})
export class UniAutocompleteMatComponent implements OnInit {

  @Input()
  field: UniFormField = { key: '', type: 'text' };

  @Input()
  formGroup: FormGroup;

  @ViewChild('autoInput')
  autoInput?: ElementRef<HTMLInputElement>;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  private fieldGroupsBackup: UniFormFieldGroup[] = [];
  private fieldOptionsBackup: UniFormFieldOption[] = [];
  chips: string[] = [];
  autoCtrl = new FormControl({ value: '123', disabled: true }, [Validators.required]);
  groups$: Observable<UniFormFieldGroup[]> = of([]);
  options$: Observable<UniFormFieldOption[]> = of([]);

  constructor(
    private formBuilder: FormBuilder,
    private autoService: UniAutocompleteMatService,
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    if (this.field.type === 'autocomplete') {
      const formField = this.field.multi ? this.autoCtrl : this.formGroup.get(this.field.key);

      if (this.field.groups) {
        this.fieldGroupsBackup = this.field.groups;

        this.groups$ = formField!.valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this.autoService.filterGroups(this.field.groups, value)),
          );
      } else if (this.field.options) {
        this.fieldOptionsBackup = this.field.options;

        this.options$ = formField!.valueChanges
          .pipe(
            startWith(''),
            map((value: string) => this.autoService.filterValue(this.field.options, value)),
          );
      }
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    const formattedValue = this.autoService.getFormattedValue(this.field.groups, this.field.options, value);

    if (formattedValue) {
      this.chips.push(formattedValue);
      this.patchValues();
    }

    // Clear the input value
    event.chipInput!.clear();
    this.autoCtrl.setValue('');
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.field.multi && this.autoInput) {
      const value = event.option.viewValue;
      const notPresent = this.chips.filter((chip: string) => chip.toLowerCase() === value.toLowerCase()).length === 0;

      if (notPresent) {
        this.chips.push(value);
        this.patchValues();
      }

      this.autoInput.nativeElement.value = '';
      this.autoCtrl.setValue('');
    }
  }

  remove(chip: string): void {
    const index = this.chips.indexOf(chip);

    if (index >= 0) {
      this.chips.splice(index, 1);
      this.patchValues();
    }

    this.autoCtrl.setValue('');
  }

  onBlur(event: any): void {
    event.preventDefault();

    this.formGroup.patchValue({
      [this.field.key]: this.autoService.getFormattedValue(this.field.groups, this.field.options, event.target.value) || '',
    });
  }

  private patchValues(): void {
    this.formGroup.patchValue({ [this.field.key]: this.chips });

    if (this.field.groups) {
      this.field.groups = this.autoService.patchGroups(this.fieldGroupsBackup, this.chips);
    } else if (this.field.options) {
      this.field.options = this.autoService.filterValues(this.fieldOptionsBackup, this.chips);
    }
  }
}
