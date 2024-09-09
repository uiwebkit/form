import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { UniFormField } from '../../../../models/interfaces/form-field.model';
import { isDefined } from '../../../../utils/is';
import { UniFormFieldErrorComponent } from '../../../form-field-error/form-field-error.component';

@Component({
  selector: 'uni-number-mat',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatLabel, MatError, MatHint, UniFormFieldErrorComponent],
  templateUrl: 'number.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniNumberMatComponent {
  @Input()
  field: UniFormField = { key: '', type: 'text' };

  @Input()
  formGroup: FormGroup;

  @Input()
  hasPrefix: boolean = false;

  @Input()
  hasSuffix: boolean = false;

  isDefined = isDefined;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }
}
