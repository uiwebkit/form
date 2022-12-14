import { Injectable } from '@angular/core';

import { UniFormFieldGroup, UniFormFieldOption } from 'uni-form-ng';

@Injectable({ providedIn: 'root' })
export class UniAutocompleteMatService {

  getFormattedValue(groups: UniFormFieldGroup[] = [], options: UniFormFieldOption[] = [], value: string): string {
    return groups.length > 0
      ? this.getGroupValue(groups, value)
      : this.getOptionsValue(options, value);
  }

  getGroupValue(groups: UniFormFieldGroup[], value: string): string {
    return groups
      .map((group) => group.options
        .filter((item) => value.toLowerCase() === (item.label + '').toLowerCase())
        .map((item) => item.value + ''))
      .flatMap(items => items)[0];
  }

  getOptionsValue(options: UniFormFieldOption[], value: string): string {
    return options
      .filter((item) => value.toLowerCase() === (item.label + '').toLowerCase())
      .map((item) => item.value + '')[0];
  }

  patchGroups(groups: UniFormFieldGroup[], values: string[]): UniFormFieldGroup[] {
    return groups
      .map((group: UniFormFieldGroup) => ({ ...group, options: this.filterValues(group.options, values) }))
      .filter((group: UniFormFieldGroup): boolean => group.options.length > 0);
  }

  filterValues(items: UniFormFieldOption[], values: string[]): UniFormFieldOption[] {
    return items.filter((item: UniFormFieldOption): boolean => {
      return !values.some((value: string): boolean => value.toLowerCase() === item.label.toLowerCase());
    });
  };

  // filter groups and options if option label does not include specified value and hide empty groups
  filterGroups(groups: UniFormFieldGroup[] = [], value: string): UniFormFieldGroup[] {
    return value
      ? groups
        .map((group: UniFormFieldGroup) => ({
          name: group.name,
          options: this.filterValue(group.options, value),
        }))
        .filter((group: UniFormFieldGroup): boolean => group.options.length > 0)
      : groups;
  }

  filterValue(items: UniFormFieldOption[] = [], value: string): UniFormFieldOption[] {
    return items.filter((item: UniFormFieldOption): boolean => item.label.toLowerCase().includes(value.toLowerCase()));
  };
}
