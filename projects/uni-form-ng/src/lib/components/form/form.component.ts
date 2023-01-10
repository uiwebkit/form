import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
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

  @Input()
  clean: boolean | undefined;

  @Output()
  formGroupEvent = new EventEmitter<FormGroup>();

  @Output()
  submitEvent = new EventEmitter<FormGroup>();

  @HostListener('uniFormData') onUniFormData() {
    this.onUniFormDataChange(event as CustomEvent);
  }

  formGroup: FormGroup;
  private formData: UniObject<UniFormField[]> = {};

  constructor(
    private elRef: ElementRef,
    private formBuilder: FormBuilder,
    private formService: UniFormService,
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  private onUniFormDataChange(event: CustomEvent) {
    const curr = [...event.detail.formData];
    const prev = [...(this.formData[curr[0].key] || [])];
    // console.log(...prev);
    // console.log(...curr);

    if (this.clean && prev) {
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

  private uniFormGroupEvent(formGroup: FormGroup): void {
    const formFields = this.elRef.nativeElement.querySelectorAll('uni-form-field-ng');

    formFields.forEach((group: HTMLElement): void => {
      group.dispatchEvent(new CustomEvent('uniFormGroup', { detail: formGroup }));
    });
  }
}
