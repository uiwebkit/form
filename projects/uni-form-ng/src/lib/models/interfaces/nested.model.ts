import { UniFormFieldType } from 'uni-form-ng';

export interface UniFormNested {
  type?: UniFormFieldType
  value?: number | string | string[] | boolean;
  multi?: boolean;
}
