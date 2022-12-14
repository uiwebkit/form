import { Injectable } from '@angular/core';

import { UniFormField } from 'uni-form-ng';

@Injectable({ providedIn: 'root' })
export class UniFormFieldService {

  dispatch(el: HTMLElement, formData: UniFormField[]): void {
    el.dispatchEvent(new CustomEvent('uniFormData', {
      bubbles: true,
      detail: { formData },
    }));
  }
}
