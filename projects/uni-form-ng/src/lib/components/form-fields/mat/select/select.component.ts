import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatOptgroup, MatOption, MatSelect } from '@angular/material/select';

import { UniFormField } from '../../../../models/interfaces/form-field.model';
import { UniFormFieldErrorComponent } from '../../../form-field-error/form-field-error.component';

@Component({
  selector: 'uni-select-mat',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatError, MatHint, MatSelect, MatOptgroup, MatOption, UniFormFieldErrorComponent],
  templateUrl: 'select.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniSelectMatComponent {
  @Input()
  field: UniFormField = { key: '', type: 'text' };

  @Input()
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }
}
