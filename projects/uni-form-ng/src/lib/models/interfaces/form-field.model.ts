import { UniFormFieldType } from '../types/form-field.type';
import { UniInputText } from './input-text.model';
import { UniInputNumber } from './input-number.model';
import { UniSelectField } from './select-field.model';
import { UniRadioField } from './radio-field.model';
import { UniCheckboxField } from './checkbox-field.model';
import { UniFormFieldErrors } from './errors.model';

export interface UniFormField extends Partial<UniInputText>, Partial<UniInputNumber>, Partial<UniCheckboxField>, UniRadioField, UniSelectField {
  type: UniFormFieldType;
  key: string;
  label?: string;
  value?: string | string[] | boolean;
  disabled?: boolean;
  fields?: string[];
  errors?: Partial<UniFormFieldErrors>
}
