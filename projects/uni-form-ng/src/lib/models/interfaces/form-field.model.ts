import { UniFormFieldType } from '../types/form-field.type';
import { UniInputText } from './input-text.model';
import { UniInputNumber } from './input-number.model';
import { UniSelectField } from './select-field.model';
import { UniRadioField } from './radio-field.model';

export interface UniFormField extends UniInputText, UniInputNumber, UniRadioField, UniSelectField {
  key: string;
  type: UniFormFieldType;
  label?: string;
  value?: string | string[] | boolean;
  main?: boolean;
  required?: boolean;
  disabled?: boolean;
  fields?: string[];
  errors?: {
    required?: string;
    min?: string;
    max?: string;
    maxLength?: string;
  };
}
