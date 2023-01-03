import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppStaticCheckboxComponent } from './checkbox.component';
import { AppStaticCheckboxDefaultComponent } from './default/default.component';
import { AppStaticCheckboxDisabledComponent } from './disabled/disabled.component';
import { AppStaticCheckboxRequiredComponent } from './required/required.component';
import { AppStaticCheckboxValueComponent } from './value/value.component';

const Declarations = [
  AppStaticCheckboxComponent,
  AppStaticCheckboxDefaultComponent,
  AppStaticCheckboxDisabledComponent,
  AppStaticCheckboxRequiredComponent,
  AppStaticCheckboxValueComponent,
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
export class AppStaticCheckboxModule {
}
