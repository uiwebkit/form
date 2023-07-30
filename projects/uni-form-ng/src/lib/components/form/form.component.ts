import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  @HostListener('uniFormDataAdd') onUniFormDataAdd() {
    this.onUniFormDataAddChange(event as CustomEvent);
  }

  @HostListener('uniFormDataRemove') onUniFormDataRemove() {
    this.onUniFormDataRemoveChange(event as CustomEvent);
  }

  formGroup: FormGroup;

  constructor(
    private elRef: ElementRef,
    private formBuilder: FormBuilder,
    private formService: UniFormService,
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  private onUniFormDataAddChange(event: CustomEvent) {
    this.formGroup = this.formService.addControls(this.formGroup, [...event.detail.formData], event.detail.mode);

    this.uniFormGroupEvent(this.formGroup);
    this.formGroupEvent.emit(this.formGroup);
  }

  private onUniFormDataRemoveChange(event: CustomEvent) {
    if (this.clean) {
      this.formService.removeControls(this.formGroup, [...event.detail.formData]);
    }

    this.uniFormGroupEvent(this.formGroup);
    this.formGroupEvent.emit(this.formGroup);
  }

  private uniFormGroupEvent(formGroup: FormGroup): void {
    const formFields = this.elRef.nativeElement.querySelectorAll('uni-form-field-ng');

    formFields.forEach((group: HTMLElement): void => {
      group.dispatchEvent(new CustomEvent('uniFormGroup', { detail: formGroup }));
    });
  }
}
