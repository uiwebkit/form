import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

import { UniFormField } from '../../../models/interfaces/form-field.model';
import { UniFormFieldType } from '../../../models/types/form-field.type';
import { UniSliderMatComponent } from './slider/slider-mat.component';
import { UniTextMatComponent } from './text/text.component';
import { UniSelectMatComponent } from './select/select.component';
import { UniAutocompleteMatComponent } from './autocomplete/autocomplete-mat.component';
import { UniDatepickerMatComponent } from './datepicker/datepicker-mat.component';
import { UniDatepickerRangeMatComponent } from './datepicker-range/datepicker-range-mat.component';

@Component({
  selector: 'uni-form-fields-mat',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSlideToggle,
    MatCheckbox,
    MatRadioButton,
    MatRadioGroup,
    UniSliderMatComponent,
    UniTextMatComponent,
    UniSelectMatComponent,
    UniAutocompleteMatComponent,
    UniDatepickerMatComponent,
    UniDatepickerRangeMatComponent,
  ],
  templateUrl: 'form-fields-mat.component.html',
  styleUrls: ['form-fields-mat.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UniFormFieldsMatComponent {
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

  isInput(fieldType: UniFormFieldType): boolean {
    return ['text', 'email', 'password'].includes(fieldType);
  }
}
