import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppDynamicRadioComponent } from './radio.component';
import { AppDynamicRadioDefaultComponent } from './default/default.component';
import { AppDynamicRadioValueComponent } from './value/value.component';
import { AppDynamicRadioCleanComponent } from './clean/clean.component';

const Declarations = [
  AppDynamicRadioComponent,
  AppDynamicRadioDefaultComponent,
  AppDynamicRadioValueComponent,
  AppDynamicRadioCleanComponent
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
export class AppDynamicRadioModule {
}
