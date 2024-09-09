import { UniFormFieldType } from '../types/form-field.type';
import { UniInputText } from './input-text.model';
import { UniInputNumber } from './input-number.model';
import { UniSelectField } from './select-field.model';
import { UniSwitchField } from './switch-field.model';
import { UniCheckboxField } from './checkbox-field.model';
import { UniRadioField } from './radio-field.model';
import { UniFormFieldErrors } from './errors.model';
import { UniSliderField } from './slider.model';
import { UniDatepickerField } from './datepicker.model';
import { UniFormFieldGroup } from './form-field-group.model';
import { UniFormFieldOption } from './form-field-option.model';

export interface UniFormField
  extends Partial<UniInputText>,
    Partial<UniInputNumber>,
    Partial<UniSelectField>,
    Partial<UniDatepickerField>,
    Partial<UniSliderField>,
    Partial<UniSwitchField>,
    Partial<UniCheckboxField>,
    Partial<UniRadioField> {
  type: UniFormFieldType;
  key: string;
  label?: string;
  value?: number | string | string[] | boolean;
  disabled?: boolean;
  step?: number;
  min?: number;
  max?: number;
  multi?: boolean;
  inline?: boolean;
  showOn?: { key: string; value: any };
  groups?: UniFormFieldGroup[];
  options?: UniFormFieldOption[];
  fields?: string[];
  keyEnd?: string;
  dateEnd?: string;
  placeholderEnd?: string;
  minDate?: string;
  maxDate?: string;
  tooltip?: boolean;
  ticks?: boolean;
  errors?: Partial<UniFormFieldErrors>;
}
