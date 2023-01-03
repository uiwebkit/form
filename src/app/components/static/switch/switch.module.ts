import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppStaticSwitchComponent } from './switch.component';
import { AppStaticSwitchDefaultComponent } from './default/default.component';
import { AppStaticSwitchDisabledComponent } from './disabled/disabled.component';
import { AppStaticSwitchRequiredComponent } from './required/required.component';
import { AppStaticSwitchValueComponent } from './value/value.component';

const Declarations = [
  AppStaticSwitchComponent,
  AppStaticSwitchDefaultComponent,
  AppStaticSwitchDisabledComponent,
  AppStaticSwitchRequiredComponent,
  AppStaticSwitchValueComponent,
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
export class AppStaticSwitchModule {
}
