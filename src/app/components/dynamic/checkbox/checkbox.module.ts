import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { UniFormComponent, UniFormFieldComponent } from 'uni-form-ng';

import { AppCommonModule } from '../../common/common.module';
import { AppDynamicCheckboxComponent } from './checkbox.component';
import { AppDynamicCheckboxDefaultComponent } from './default/default.component';
import { AppDynamicCheckboxValueComponent } from './value/value.component';
import { AppDynamicCheckboxCleanComponent } from './clean/clean.component';

const Declarations = [
  AppDynamicCheckboxComponent,
  AppDynamicCheckboxDefaultComponent,
  AppDynamicCheckboxValueComponent,
  AppDynamicCheckboxCleanComponent,
];

@NgModule({
  imports: [MatExpansionModule, MatButtonModule, MatIconModule, AppCommonModule, UniFormComponent, UniFormFieldComponent],
  declarations: Declarations,
  exports: Declarations,
})
export class AppDynamicCheckboxModule {}
