import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { UniFormComponent, UniFormFieldComponent } from 'uni-form-ng';

import { AppCommonModule } from '../../common/common.module';
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
  imports: [MatExpansionModule, MatButtonModule, MatIconModule, AppCommonModule, UniFormComponent, UniFormFieldComponent],
  declarations: Declarations,
  exports: Declarations,
})
export class AppStaticCheckboxModule {}
