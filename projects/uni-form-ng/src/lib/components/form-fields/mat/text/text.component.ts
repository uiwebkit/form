import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';

import { UniFormField } from '../../../../models/interfaces/form-field.model';

@Component({
  selector: 'uni-text-mat',
  templateUrl: 'text.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniTextMatComponent {

  @Input()
  field: UniFormField = { key: '', type: 'text' };

  @Input()
  formGroup: FormGroup;

  @Input()
  hasPrefix: boolean = false;

  @Input()
  hasSuffix: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }
}
