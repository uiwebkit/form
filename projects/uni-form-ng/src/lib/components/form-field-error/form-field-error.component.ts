import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { UniObject } from 'uni-form-ng';

@Component({
  selector: 'uni-form-field-error-ng',
  templateUrl: './form-field-error.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniFormFieldErrorComponent {

  @Input()
  fieldErrors: UniObject<string> = {};

  @Input()
  errors: ValidationErrors | null = null;
}
