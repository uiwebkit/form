import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { UniFormComponent } from './components/form/form.component';
import { UniFormGroupComponent } from './components/form-group/form-group.component';
import { UniFormFieldComponent } from './components/form-field/form-field.component';
import { UniFormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { UniFormFieldsMatComponent } from './components/form-fields/mat/form-fields-mat.component';
import { UniAutocompleteMatComponent } from './components/form-fields/mat/autocomplete/autocomplete-mat.component';

const Declarations = [
  UniFormComponent,
  UniFormGroupComponent,
  UniFormFieldComponent,
  UniFormFieldsMatComponent,
  UniAutocompleteMatComponent,
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
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule
  ],
  declarations: Declarations,
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  exports: Declarations,
})
export class UniFormModule {
}
