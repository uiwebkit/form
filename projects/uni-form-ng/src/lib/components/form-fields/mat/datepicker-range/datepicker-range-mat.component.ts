import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UniFormField } from '../../../../models/interfaces/form-field.model';

@Component({
  selector: 'uni-datepicker-range-mat',
  templateUrl: './datepicker-range-mat.component.html',
})
export class UniDatepickerRangeMatComponent {

  @Input()
  field: UniFormField = { key: '', type: 'datepicker' };

  @Input()
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }
}
