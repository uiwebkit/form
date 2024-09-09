import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { UniFormComponent, UniFormFieldComponent } from 'uni-form-ng';

import { AppCommonModule } from '../../common/common.module';
import { AppDynamicSelectComponent } from './select.component';
import { AppDynamicSelectDefaultComponent } from './default/default.component';
import { AppDynamicSelectMultiComponent } from './multi/multi.component';
import { AppDynamicSelectValueComponent } from './value/value.component';
import { AppDynamicSelectValueMultiComponent } from './value-multi/value-multi.component';
import { AppDynamicSelectCleanComponent } from './clean/clean.component';

const Declarations = [
  AppDynamicSelectComponent,
  AppDynamicSelectDefaultComponent,
  AppDynamicSelectMultiComponent,
  AppDynamicSelectValueComponent,
  AppDynamicSelectValueMultiComponent,
  AppDynamicSelectCleanComponent,
];

@NgModule({
  imports: [MatExpansionModule, MatButtonModule, MatIconModule, AppCommonModule, UniFormComponent, UniFormFieldComponent],
  declarations: Declarations,
  exports: Declarations,
})
export class AppDynamicSelectModule {}
