export interface UniInputText {
  maxLength?: number;
}

export interface UniStrictInputText extends UniInputText {
  key: string;
  type: 'text';
}
