import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { UniFormComponent, UniFormFieldComponent } from 'uni-form-ng';

import { AppCommonModule } from '../../common/common.module';
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
  imports: [MatExpansionModule, MatButtonModule, MatIconModule, AppCommonModule, UniFormComponent, UniFormFieldComponent],
  declarations: Declarations,
  exports: Declarations,
})
export class AppStaticRadioModule {}
