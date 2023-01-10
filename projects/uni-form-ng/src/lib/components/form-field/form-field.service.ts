import { Injectable } from '@angular/core';

import { UniFormField } from '../../models/interfaces/form-field.model';
import { UniFormFieldOption } from '../../models/interfaces/form-field-option.model';
import { UniFormFieldGroup } from '../../models/interfaces/form-field-group.model';
import { isArray } from '../../utils/is';

@Injectable({ providedIn: 'root' })
export class UniFormFieldService {

  dispatch(el: HTMLElement, formData: UniFormField[]): void {
    el.dispatchEvent(new CustomEvent('uniFormData', {
      bubbles: true,
      detail: { formData },
    }));
  }

  groupsToOptions(field: UniFormField): UniFormFieldOption[] {
    let options: UniFormFieldOption[] = [];

    if (field.groups) {
      field.groups.forEach((group: UniFormFieldGroup) => {
        options = [...options, ...group.options];
      });
    } else {
      options = field.options || [];
    }

    return options;
  }

  getSelectedOptions(options: UniFormFieldOption[], value: string | number | string[] | number[]) {
    return options?.filter((option: UniFormFieldOption) => !isArray(value)
      ? value === option.value
      : option.value && (value as any[]).includes(option.value),
    ) || [];
  }

  hasSelectedOptionsFields(selectedOptions: UniFormFieldOption[]): boolean {
    return selectedOptions.some((option: UniFormFieldOption) => option.fields);
  }
}
