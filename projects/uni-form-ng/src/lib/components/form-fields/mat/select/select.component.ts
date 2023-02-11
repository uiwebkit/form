import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';

import { UniFormField } from '../../../../models/interfaces/form-field.model';

@Component({
  selector: 'uni-select-mat',
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
