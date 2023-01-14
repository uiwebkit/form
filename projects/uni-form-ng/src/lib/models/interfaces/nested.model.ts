import { UniFormFieldType } from '../types/form-field.type';

export interface UniFormNested {
  type?: UniFormFieldType
  value?: number | string | string[] | boolean;
  multi?: boolean;
}
