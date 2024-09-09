import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatSlider, MatSliderRangeThumb, MatSliderThumb } from '@angular/material/slider';

import { UniFormField } from '../../../../models/interfaces/form-field.model';
import { UniFormFieldErrorComponent } from '../../../form-field-error/form-field-error.component';

@Component({
  selector: 'uni-slider-mat',
  standalone: true,
  imports: [ReactiveFormsModule, MatLabel, MatSlider, MatSliderRangeThumb, MatSliderThumb, UniFormFieldErrorComponent],
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
