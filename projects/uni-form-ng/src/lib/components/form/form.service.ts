import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UniFormField } from '../../models/interfaces/form-field.model';
import { isDefined } from '../../utils/is';

@Injectable({ providedIn: 'root' })
export class UniFormService {

  removeControls(formGroup: FormGroup, fields: UniFormField[]): void {
    fields.forEach((field: UniFormField) => {
      formGroup.removeControl(field.key);
    });
  }

  addControls(formGroup: FormGroup, fields: UniFormField[], mode: 'add' | 'set'): FormGroup {
    fields.forEach((field: UniFormField) => {
      const disabled = field.disabled || false;
      const value = isDefined(field.value)
        ? field.value
        : field.type === 'switch' || field.type === 'checkbox'
          ? false
          : field.multi
            ? []
            : '';

      const methodName = mode === 'set'? 'setControl' : 'addControl';

      if (field.keyEnd) {
        formGroup[methodName](field.keyEnd, new FormControl(field.valueEnd || field.dateEnd));
      }

      formGroup[methodName](field.key, new FormControl({ value, disabled }, [
        ...(field.required ? [Validators.required] : []),
        ...(field.requiredTrue ? [Validators.requiredTrue] : []),
        ...(field.min ? [Validators.min(field.min)] : []),
        ...(field.max ? [Validators.max(field.max)] : []),
        ...(field.minLength ? [Validators.minLength(field.minLength)] : []),
        ...(field.maxLength ? [Validators.maxLength(field.maxLength)] : []),
        ...(field.pattern ? [Validators.pattern(field.pattern)] : []),
      ]));
    });

    return formGroup;
  }
}
