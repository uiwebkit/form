import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppDynamicCheckboxComponent } from './checkbox.component';
import { AppDynamicCheckboxDefaultComponent } from './default/default.component';
import { AppDynamicCheckboxValueComponent } from './value/value.component';
import { AppDynamicCheckboxCleanComponent } from './clean/clean.component';

const Declarations = [
  AppDynamicCheckboxComponent,
  AppDynamicCheckboxDefaultComponent,
  AppDynamicCheckboxValueComponent,
  AppDynamicCheckboxCleanComponent
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
export class AppDynamicCheckboxModule {
}
