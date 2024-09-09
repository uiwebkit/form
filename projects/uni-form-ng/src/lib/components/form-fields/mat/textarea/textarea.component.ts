import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { UniFormField } from '../../../../models/interfaces/form-field.model';
import { UniFormFieldErrorComponent } from '../../../form-field-error/form-field-error.component';

@Component({
  selector: 'uni-textarea-mat',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatLabel, MatError, MatHint, UniFormFieldErrorComponent],
  templateUrl: 'textarea.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniTextareaMatComponent {

  @Input()
  field: UniFormField = { key: '', type: 'text' };

  @Input()
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }
}
