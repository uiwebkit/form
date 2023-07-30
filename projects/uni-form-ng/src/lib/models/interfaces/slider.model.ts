export interface UniSliderField {
  keyEnd: string;
  valueEnd: number;
  tooltip: boolean;
  ticks: boolean;
  step: number;
  min: number;
  max: number;
}

export interface UniStrictSliderField extends UniSliderField {
  key: string;
  type: 'slider';
}
