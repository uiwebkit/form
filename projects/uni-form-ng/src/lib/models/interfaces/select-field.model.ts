import { UniFormFieldOption } from './form-field-option.model';
import { UniFormFieldGroup } from './form-field-group.model';

export interface UniSelectField {
  multi: boolean;
  options: UniFormFieldOption[];
  groups: UniFormFieldGroup[];
}

export interface UniStrictSelectField extends UniSelectField {
  key: string;
  type: 'select';
}
