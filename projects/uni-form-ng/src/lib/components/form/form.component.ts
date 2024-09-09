import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { takeUntil } from 'rxjs';

import { UniFormField } from '../../models/interfaces/form-field.model';
import { RxUnsubscribe } from '../../utils/rx-unsubscribe';
import { UniFormFieldsMatComponent } from '../form-fields/mat/form-fields-mat.component';
import { UniFormFieldService } from '../form-field/form-field.service';
import { UniFormService } from './form.service';

@Component({
  selector: 'uni-form-ng',
  standalone: true,
  imports: [ReactiveFormsModule, UniFormFieldsMatComponent],
  providers: [UniFormService],
  templateUrl: 'form.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UniFormComponent extends RxUnsubscribe implements OnInit {
  @Input()
  clean: boolean | undefined;

  @Output()
  formGroupEvent = new EventEmitter<FormGroup>();

  @Output()
  submitEvent = new EventEmitter<FormGroup>();

  // @HostListener('uniFormDataAdd') onUniFormDataAdd() {
  //   this.onUniFormDataAddChange(event as CustomEvent);
  // }

  // @HostListener('uniFormDataRemove') onUniFormDataRemove() {
  //   this.onUniFormDataRemoveChange(event as CustomEvent);
  // }

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formService: UniFormService,
    private formFieldService: UniFormFieldService
  ) {
    super();
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.formFieldService.uniFormDataAdded$.pipe(takeUntil(this.destroy$)).subscribe(data => this.onUniFormDataAddChange(data));
    this.formFieldService.uniFormDataRemoved$.pipe(takeUntil(this.destroy$)).subscribe(data => this.onUniFormDataRemoveChange(data));
  }

  private onUniFormDataAddChange(data: { formData: UniFormField[]; mode: 'add' | 'set' }): void {
    this.formGroup = this.formService.addControls(this.formGroup, [...data.formData], data.mode);

    this.uniFormGroupEvent(this.formGroup);
    this.formGroupEvent.emit(this.formGroup);
  }

  private onUniFormDataRemoveChange(formData: UniFormField[]): void {
    if (this.clean) {
      this.formService.removeControls(this.formGroup, [...formData]);
    }

    this.uniFormGroupEvent(this.formGroup);
    this.formGroupEvent.emit(this.formGroup);
  }

  private uniFormGroupEvent(formGroup: FormGroup): void {
    this.formFieldService.updateUniFormGroup(formGroup);
    // const formFields = this.elRef.nativeElement.querySelectorAll('uni-form-field-ng');

    // formFields.forEach((group: HTMLElement): void => {
    //   group.dispatchEvent(new CustomEvent('uniFormGroup', { detail: formGroup }));
    // });
  }
}
