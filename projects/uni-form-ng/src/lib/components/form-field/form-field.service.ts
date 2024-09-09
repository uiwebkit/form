import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

import { UniFormField } from '../../models/interfaces/form-field.model';
import { UniFormFieldOption } from '../../models/interfaces/form-field-option.model';
import { UniFormFieldGroup } from '../../models/interfaces/form-field-group.model';
import { isArray } from '../../utils/is';

@Injectable({ providedIn: 'root' })
export class UniFormFieldService {
  private uniFormGroupSource = new Subject<FormGroup>();
  private uniFormDataAddSource = new Subject<{ formData: UniFormField[]; mode: 'add' | 'set' }>();
  private uniFormDataRemoveSource = new Subject<UniFormField[]>();

  uniFormGroupUpdated$ = this.uniFormGroupSource.asObservable();
  uniFormDataAdded$ = this.uniFormDataAddSource.asObservable();
  uniFormDataRemoved$ = this.uniFormDataRemoveSource.asObservable();

  updateUniFormGroup(group: FormGroup): void {
    this.uniFormGroupSource.next(group);
  }

  addUniFormData(formData: UniFormField[], mode: 'add' | 'set'): void {
    this.uniFormDataAddSource.next({ formData, mode });
  }

  removeUniFormData(data: UniFormField[]): void {
    this.uniFormDataRemoveSource.next(data);
  }

  // dispatchAdd(el: HTMLElement, formData: UniFormField[], mode: 'add' | 'set'): void {
  //   el.dispatchEvent(new CustomEvent('uniFormDataAdd', {
  //     bubbles: true,
  //     detail: { formData, mode },
  //   }));
  // }

  // dispatchRemove(el: HTMLElement, formData: UniFormField[]): void {
  //   el.dispatchEvent(new CustomEvent('uniFormDataRemove', {
  //     bubbles: true,
  //     detail: { formData },
  //   }));
  // }

  enrichField(field: UniFormField, options: Partial<UniFormField> | undefined): UniFormField {
    if (options) {
      if (options.options) {
        if (field.options) {
          field.options = this.mapOptions(field.options, options.options);
        } else if (field.groups) {
          field.groups = field.groups.map((group: UniFormFieldGroup): UniFormFieldGroup => {
            group.options = this.mapOptions(group.options, options.options!);
            return group;
          });
        }

        delete options.options;
      }

      field = {
        ...field,
        ...options,
      };
    }

    return field;
  }

  private mapOptions(fieldOptions: UniFormFieldOption[], options: UniFormFieldOption[]): UniFormFieldOption[] {
    return fieldOptions.map((option: UniFormFieldOption) => {
      const index: number = options.findIndex((opt: UniFormFieldOption): boolean => option.value === opt.value);

      if (index >= 0) {
        option = { ...option, ...options[index] };
      }

      return option;
    });
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
    return (
      options?.filter((option: UniFormFieldOption) =>
        !isArray(value) ? value === option.value : option.value && (value as any[]).includes(option.value)
      ) || []
    );
  }

  hasSelectedOptionsFields(selectedOptions: UniFormFieldOption[]): boolean {
    return selectedOptions.some((option: UniFormFieldOption) => option.fields);
  }
}
