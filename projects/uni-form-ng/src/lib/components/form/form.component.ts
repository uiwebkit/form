import { Component, ElementRef, EventEmitter, HostListener, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UniObject } from '../../models/interfaces/object.model';
import { UniFormField } from '../../models/interfaces/form-field.model';
import { UniFormService } from './form.service';

@Component({
  selector: 'uni-form-ng',
  templateUrl: 'form.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniFormComponent {

  @Output()
  formGroupEvent = new EventEmitter<FormGroup>();

  @Output()
  submitEvent = new EventEmitter<FormGroup>();

  @HostListener('uniFormData') onUniFormData() {
    const e = event as CustomEvent;
    const curr = [...e.detail.formData];
    const prev = [...(this.formData[curr[0].key] || [])];
    // console.log(prev, curr);

    if (prev) {
      const removeFields = curr ? prev.filter((field: UniFormField) => !curr.includes(field)) : prev;
      // console.log('Remove:', removeFields);
      this.formService.removeControls(this.formGroup, removeFields);
    }

    const addFields = prev && curr ? curr.filter((field: UniFormField) => !prev.includes(field)) : curr || [];
    // console.log('Add:', addFields);
    this.formService.addControls(this.formGroup, addFields);
    this.formData[curr[0].key] = curr;

    this.uniFormGroupEvent(this.formGroup);
    this.formGroupEvent.emit(this.formGroup);
    // console.log(this.formGroup);
  }

  private formData: UniObject<UniFormField[]> = {};
  formGroup: FormGroup;

  constructor(
    private elRef: ElementRef,
    private formBuilder: FormBuilder,
    private formService: UniFormService,
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  uniFormGroupEvent(formGroup: FormGroup): void {
    const formFields = this.elRef.nativeElement.querySelectorAll('uni-form-field-ng');

    formFields.forEach((group: HTMLElement): void => {
      group.dispatchEvent(new CustomEvent('uniFormGroup', { detail: formGroup }));
    });
  }
}
