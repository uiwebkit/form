import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppStaticRadioComponent } from './radio.component';
import { AppStaticRadioDefaultComponent } from './default/default.component';
import { AppStaticRadioDisabledComponent } from './disabled/disabled.component';
import { AppStaticRadioRequiredComponent } from './required/required.component';
import { AppStaticRadioValueComponent } from './value/value.component';
import { AppStaticRadioInlineComponent } from './inline/inline.component';
import { AppStaticRadioOptionComponent } from './option/option.component';

const Declarations = [
  AppStaticRadioComponent,
  AppStaticRadioDefaultComponent,
  AppStaticRadioDisabledComponent,
  AppStaticRadioRequiredComponent,
  AppStaticRadioOptionComponent,
  AppStaticRadioValueComponent,
  AppStaticRadioInlineComponent,
];

@NgModule({
  imports: [
    CommonModule,

    MatExpansionModule,
    MatButtonModule,

    UniFormModule,
  ],
  declarations: Declarations,
  exports: Declarations
})
export class AppStaticRadioModule {
}
