export interface UniInputNumber {
  step: number;
  min: number;
  max: number;
}

export interface UniStrictInputNumber extends UniInputNumber {
  type: 'number';
  key: string;
}
