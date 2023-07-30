export interface UniDatepickerField {
  keyEnd: string;
  dateEnd: string;
  placeholderEnd: string;
  minDate: string;
  maxDate: string;
}

export interface UniStrictDatepickerField extends UniDatepickerField {
  key: string;
  type: 'datepicker';
}
