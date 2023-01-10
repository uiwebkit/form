export interface UniDatepickerField {
  keyEnd: string;
  dateEnd: string;
  placeholderEnd: string;
}

export interface UniStrictDatepickerField extends UniDatepickerField {
  key: string;
  type: 'datepicker';
}
