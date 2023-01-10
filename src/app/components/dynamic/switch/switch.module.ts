import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppDynamicSwitchComponent } from './switch.component';
import { AppDynamicSwitchDefaultComponent } from './default/default.component';
import { AppDynamicSwitchValueComponent } from './value/value.component';
import { AppDynamicSwitchCleanComponent } from './clean/clean.component';

const Declarations = [
  AppDynamicSwitchComponent,
  AppDynamicSwitchDefaultComponent,
  AppDynamicSwitchValueComponent,
  AppDynamicSwitchCleanComponent
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
export class AppDynamicSwitchModule {
}
