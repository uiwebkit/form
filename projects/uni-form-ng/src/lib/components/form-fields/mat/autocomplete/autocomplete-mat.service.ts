import { Injectable } from '@angular/core';

import { UniFormFieldGroup } from '../../../../models/interfaces/form-field-group.model';
import { UniFormFieldOption } from '../../../../models/interfaces/form-field-option.model';
import { isDefined } from "../../../../utils/is";

@Injectable({ providedIn: 'root' })
export class UniAutocompleteMatService {

  getLabelByValue(groups: UniFormFieldGroup[] = [], options: UniFormFieldOption[] = [], value: string): string {
    return groups.length > 0 ? this.getGroupValue(groups, value) : this.getOptionsValue(options, value);
  }

  private getGroupValue(groups: UniFormFieldGroup[], value: string): string {
    return groups
      .map((group: UniFormFieldGroup) => group.options.find((item: UniFormFieldOption): boolean => value === item.value))
      .filter((item: UniFormFieldOption | undefined): boolean => isDefined(item))[0]?.label!;
  }

  private getOptionsValue(options: UniFormFieldOption[], value: string): string {
    return options.find((item: UniFormFieldOption): boolean => value === item.value)?.label!
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
  };
}
