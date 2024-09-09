import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { UniFormFieldErrors } from '../../models/interfaces/errors.model';

@Component({
  selector: 'uni-form-field-error-ng',
  standalone: true,
  templateUrl: './form-field-error.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniFormFieldErrorComponent {

  @Input()
  fieldErrors: Partial<UniFormFieldErrors> = {};

  @Input()
  errors: ValidationErrors | null = null;
}
