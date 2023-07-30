import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UniFormField } from '../../../../models/interfaces/form-field.model';

@Component({
  selector: 'uni-datepicker-mat',
  templateUrl: './datepicker-mat.component.html',
})
export class UniDatepickerMatComponent {

  @Input()
  field: UniFormField = { key: '', type: 'datepicker' };

  @Input()
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }
}
