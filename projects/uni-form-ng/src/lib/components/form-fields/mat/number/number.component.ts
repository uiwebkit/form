import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';

import { UniFormField } from '../../../../models/interfaces/form-field.model';
import { isDefined } from '../../../../utils/is';

@Component({
  selector: 'uni-number-mat',
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
