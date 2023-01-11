import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { UniFormModule } from 'uni-form-ng';

import { AppCommonModule } from '../../common/common.module';
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
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    UniFormModule,

    AppCommonModule,
  ],
  declarations: Declarations,
  exports: Declarations
})
export class AppStaticSwitchModule {
}
