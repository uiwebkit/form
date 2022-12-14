import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';

import { UniFormField } from 'uni-form-ng';

@Component({
  selector: 'uni-form-fields-mat',
  templateUrl: 'form-fields-mat.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniFormFieldsMatComponent {

  @Input()
  field: UniFormField = { key: '', type: 'text' };

  @Input()
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }

  isMatFormField(field: UniFormField): boolean {
    return ['text', 'number', 'textarea', 'select'].includes(field.type);
  }

  onEnter(event: Event): void {
    event.preventDefault();
  }
}
