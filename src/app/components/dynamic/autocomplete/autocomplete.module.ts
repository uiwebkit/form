import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppDynamicAutocompleteComponent } from './autocomplete.component';
import { AppDynamicAutocompleteDefaultComponent } from './default/default.component';
import { AppDynamicAutocompleteMultiComponent } from './multi/multi.component';
import { AppDynamicAutocompleteValueComponent } from './value/value.component';
import { AppDynamicAutocompleteValueMultiComponent } from './value-multi/value.component';
import { AppDynamicAutocompleteCleanComponent } from './clean/clean.component';

const Declarations = [
  AppDynamicAutocompleteComponent,
  AppDynamicAutocompleteDefaultComponent,
  AppDynamicAutocompleteMultiComponent,
  AppDynamicAutocompleteValueComponent,
  AppDynamicAutocompleteValueMultiComponent,
  AppDynamicAutocompleteCleanComponent
];

@NgModule({
  imports: [
    MatExpansionModule,
    MatButtonModule,

    UniFormModule,
  ],
  declarations: Declarations,
  exports: Declarations
})
export class AppDynamicAutocompleteModule {
}
