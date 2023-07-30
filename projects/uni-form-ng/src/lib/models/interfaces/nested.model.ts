import { UniFormFieldType } from '../types/form-field.type';
import { UniFormFieldOption } from "./form-field-option.model";

export interface UniFormNested {
  type?: UniFormFieldType;
  value?: number | string | string[] | boolean;
  multi?: boolean;
  options?: UniFormFieldOption[];
}
