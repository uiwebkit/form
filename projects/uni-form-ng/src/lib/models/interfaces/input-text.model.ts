export interface UniInputText {
  placeholder: string;
  hint: string;
  required: boolean;
  minLength: number;
  maxLength: number;
  pattern: string;
}

export interface UniStrictInputText extends UniInputText {
  type: 'text';
  key: string;
}
