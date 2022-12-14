export interface UniInputNumber {
  step?: number;
  min?: number;
  max?: number;
}

export interface UniStrictInputNumber extends UniInputNumber {
  key: string;
  type: 'number';
}
