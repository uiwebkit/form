import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppStaticSelectComponent } from './select.component';
import { AppStaticSelectDefaultComponent } from './default/default.component';
import { AppStaticSelectDisabledComponent } from './disabled/disabled.component';
import { AppStaticSelectRequiredComponent } from './required/required.component';
import { AppStaticSelectPlaceholderComponent } from './placeholder/placeholder.component';
import { AppStaticSelectValueComponent } from './value/value.component';
import { AppStaticSelectOptionComponent } from './option/option.component';
import { AppStaticSelectHintComponent } from './hint/hint.component';
import { AppStaticSelectGroupsComponent } from './groups/groups.component';
import { AppStaticSelectMultiComponent } from './multi/multi.component';
import { AppStaticSelectValidationComponent } from './validation/validation.component';

const Declarations = [
  AppStaticSelectComponent,
  AppStaticSelectDefaultComponent,
  AppStaticSelectDisabledComponent,
  AppStaticSelectRequiredComponent,
  AppStaticSelectPlaceholderComponent,
  AppStaticSelectValueComponent,
  AppStaticSelectOptionComponent,
  AppStaticSelectHintComponent,
  AppStaticSelectGroupsComponent,
  AppStaticSelectMultiComponent,
  AppStaticSelectValidationComponent,
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
export class AppStaticSelectModule {
}
