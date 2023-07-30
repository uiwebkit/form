export interface UniRadioField {
  inline: boolean;
}

export interface UniStrictRadioField extends UniRadioField {
  key: string;
  type: 'radio';
}
