import { Injectable } from '@angular/core';

import { UniFormFieldGroup } from '../../../../models/interfaces/form-field-group.model';
import { UniFormFieldOption } from '../../../../models/interfaces/form-field-option.model';
import { isDefined } from '../../../../utils/is';

@Injectable()
export class UniAutocompleteMatService {
  getOptionBy(groups: UniFormFieldGroup[] = [], options: UniFormFieldOption[] = [], val?: string, key?: string): UniFormFieldOption | undefined {
    const value = val ? (val.toLowerCase() || '').trim() : '';
    const label = key ? (key.toLowerCase() || '').trim() : '';

    return groups.length > 0 ? this.getGroup(groups, value, label) : this.findOptionBy(options, value, label);
  }

  private getGroup(groups: UniFormFieldGroup[], value?: string, label?: string): UniFormFieldOption | undefined {
    return groups
      .map((group: UniFormFieldGroup) => this.findOptionBy(group.options, value, label))
      .filter((item: UniFormFieldOption | undefined): boolean => isDefined(item))[0];
  }

  private findOptionBy(options: UniFormFieldOption[], value?: string, label?: string): UniFormFieldOption | undefined {
    return options.find((item: UniFormFieldOption): boolean =>
      value ? value === (item.value as string)?.toLowerCase() : label ? label === (item.label as string)?.toLowerCase() : false
    );
  }

  // patchGroups(groups: UniFormFieldGroup[], values: string[]): UniFormFieldGroup[] {
  //   return groups
  //     .map((group: UniFormFieldGroup) => ({ ...group, options: this.filterValues(group.options, values) }))
  //     .filter((group: UniFormFieldGroup): boolean => group.options.length > 0);
  // }

  // filterValues(items: UniFormFieldOption[], values: string[]): UniFormFieldOption[] {
  //   return items.filter((item: UniFormFieldOption): boolean => {
  //     return !values.some((value: string): boolean => value.toLowerCase() === item.label.toLowerCase());
  //   });
  // };

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
    return items.filter((item: UniFormFieldOption): boolean => item.label?.toLowerCase().includes(value.toLowerCase()) || false);
  }
}
