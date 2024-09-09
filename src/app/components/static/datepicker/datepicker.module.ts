import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { UniFormComponent, UniFormFieldComponent } from 'uni-form-ng';

import { AppCommonModule } from '../../common/common.module';
import { AppStaticDatepickerComponent } from './datepicker.component';
import { AppStaticDatepickerDefaultComponent } from './default/default.component';
import { AppStaticDatepickerDisabledComponent } from './disabled/disabled.component';
import { AppStaticSelectDatepickerComponent } from './required/required.component';
import { AppStaticDatepickerValueComponent } from './value/value.component';
import { AppStaticDatepickerRangeComponent } from './range/range.component';

const Declarations = [
  AppStaticDatepickerComponent,
  AppStaticDatepickerDefaultComponent,
  AppStaticDatepickerDisabledComponent,
  AppStaticSelectDatepickerComponent,
  AppStaticDatepickerValueComponent,
  AppStaticDatepickerRangeComponent,
];

@NgModule({
  imports: [MatExpansionModule, MatButtonModule, MatIconModule, AppCommonModule, UniFormComponent, UniFormFieldComponent],
  declarations: Declarations,
  exports: Declarations,
})
export class AppStaticDatepickerModule {}
