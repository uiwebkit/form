import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppStaticAutocompleteComponent } from './autocomplete.component';
import { AppStaticAutocompleteDefaultComponent } from './default/default.component';
import { AppStaticAutocompleteDisabledComponent } from './disabled/disabled.component';
import { AppStaticAutocompleteRequiredComponent } from './required/required.component';
import { AppStaticAutocompletePlaceholderComponent } from './placeholder/placeholder.component';
import { AppStaticAutocompleteValueComponent } from './value/value.component';
import { AppStaticAutocompleteOptionComponent } from './option/option.component';
import { AppStaticAutocompleteHintComponent } from './hint/hint.component';
import { AppStaticAutocompleteGroupsComponent } from './groups/groups.component';
import { AppStaticAutocompleteMultiComponent } from './multi/multi.component';
import { AppStaticAutocompleteValidationComponent } from './validation/validation.component';

const Declarations = [
  AppStaticAutocompleteComponent,
  AppStaticAutocompleteDefaultComponent,
  AppStaticAutocompleteDisabledComponent,
  AppStaticAutocompleteRequiredComponent,
  AppStaticAutocompletePlaceholderComponent,
  AppStaticAutocompleteValueComponent,
  AppStaticAutocompleteOptionComponent,
  AppStaticAutocompleteHintComponent,
  AppStaticAutocompleteGroupsComponent,
  AppStaticAutocompleteMultiComponent,
  AppStaticAutocompleteValidationComponent,
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
export class AppStaticAutocompleteModule {
}
