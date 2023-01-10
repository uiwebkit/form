import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS,
  MatMomentDateModule,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { UniFormComponent } from './components/form/form.component';
import { UniFormGroupComponent } from './components/form-group/form-group.component';
import { UniFormFieldComponent } from './components/form-field/form-field.component';
import { UniFormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { UniFormFieldsMatComponent } from './components/form-fields/mat/form-fields-mat.component';
import { UniAutocompleteMatComponent } from './components/form-fields/mat/autocomplete/autocomplete-mat.component';
import { UniDatepickerMatComponent } from './components/form-fields/mat/datepicker/datepicker-mat.component';
import { UniDatepickerRangeMatComponent } from './components/form-fields/mat/datepicker-range/datepicker-range-mat.component';
import { UniSliderMatComponent } from './components/form-fields/mat/slider/slider-mat.component';

const Declarations = [
  UniFormComponent,
  UniFormGroupComponent,
  UniFormFieldComponent,
  UniFormFieldsMatComponent,
  UniAutocompleteMatComponent,
  UniDatepickerMatComponent,
  UniDatepickerRangeMatComponent,
  UniSliderMatComponent,
  UniFormFieldErrorComponent,
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatIconModule,
  ],
  declarations: Declarations,
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { strict: true } },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  exports: Declarations,
})
export class UniFormModule {
}
