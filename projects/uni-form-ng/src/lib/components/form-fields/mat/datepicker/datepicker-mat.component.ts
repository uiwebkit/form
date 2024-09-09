import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';

import { UniFormField } from '../../../../models/interfaces/form-field.model';
import { UniFormFieldErrorComponent } from '../../../form-field-error/form-field-error.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MatMomentDateModule,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';

@Component({
  selector: 'uni-datepicker-mat',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatMomentDateModule,
    MatFormField,
    MatInputModule,
    MatLabel,
    MatError,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    UniFormFieldErrorComponent,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { strict: true } },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  templateUrl: './datepicker-mat.component.html',
})
export class UniDatepickerMatComponent {
  @Input()
  field: UniFormField = { key: '', type: 'datepicker' };

  @Input()
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }
}
