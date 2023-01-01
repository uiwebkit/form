export interface UniInputTextErrors {
  required: string;
  minLength: string;
  maxLength: string;
  pattern: string;
}

export interface UniInputNumberErrors {
  required: string;
  min: string;
  max: string;
}

export interface UniCheckboxErrors {
  requiredTrue: string;
}

export interface UniFormFieldErrors extends UniInputTextErrors, UniInputNumberErrors, UniCheckboxErrors {
}
