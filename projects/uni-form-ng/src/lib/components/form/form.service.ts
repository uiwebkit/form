import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UniFormField, isDefined } from 'uni-form-ng';

@Injectable({ providedIn: 'root' })
export class UniFormService {

  removeControls(formGroup: FormGroup, fields: UniFormField[]): void {
    fields.forEach((field: UniFormField) => {
      formGroup.removeControl(field.key);
    });
  }

  addControls(formGroup: FormGroup, fields: UniFormField[]): void {
    fields.forEach((field: UniFormField) => {
      const disabled = field.disabled || false;
      const value = isDefined(field.value)
        ? field.value
        : field.type === 'checkbox'
          ? false
          : field.multiple
            ? []
            : '';

      formGroup.addControl(field.key, new FormControl(
        { value, disabled },
        [
          ...(field.required ? [Validators.required] : []),
          ...(field.min ? [Validators.min(field.min)] : []),
          ...(field.max ? [Validators.max(field.max)] : []),
          ...(field.maxLength ? [Validators.maxLength(field.maxLength)] : []),
        ],
      ));
    });
  }
}
