import { UniFormFieldOption } from './form-field-option.model';

export interface UniFormFieldGroup {
  name: string;
  disabled?: boolean;
  options: UniFormFieldOption[];
}
