import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

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
  AppStaticDatepickerRangeComponent
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
export class AppStaticDatepickerModule {
}
