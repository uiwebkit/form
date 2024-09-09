import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { UniFormComponent, UniFormFieldComponent } from 'uni-form-ng';

import { AppCommonModule } from '../../common/common.module';
import { AppDynamicRadioComponent } from './radio.component';
import { AppDynamicRadioDefaultComponent } from './default/default.component';
import { AppDynamicRadioValueComponent } from './value/value.component';
import { AppDynamicRadioCleanComponent } from './clean/clean.component';

const Declarations = [AppDynamicRadioComponent, AppDynamicRadioDefaultComponent, AppDynamicRadioValueComponent, AppDynamicRadioCleanComponent];

@NgModule({
  imports: [MatExpansionModule, MatButtonModule, MatIconModule, AppCommonModule, UniFormComponent, UniFormFieldComponent],
  declarations: Declarations,
  exports: Declarations,
})
export class AppDynamicRadioModule {}
