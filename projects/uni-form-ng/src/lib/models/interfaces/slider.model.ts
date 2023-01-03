export interface UniSliderField {
  keyEnd: string;
  step: number;
  min: number;
  max: number;
}

export interface UniStrictSliderField extends UniSliderField {
  key: string;
  type: 'slider';
}
