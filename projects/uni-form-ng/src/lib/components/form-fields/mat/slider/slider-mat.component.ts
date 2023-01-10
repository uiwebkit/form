import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UniFormField } from '../../../../models/interfaces/form-field.model';

@Component({
  selector: 'uni-slider-mat',
  templateUrl: './slider-mat.component.html',
})
export class UniSliderMatComponent {

  @Input()
  field: UniFormField = { key: '', type: 'slider' };

  @Input()
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }
}
