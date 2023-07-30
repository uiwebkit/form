import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { UniFormModule } from 'uni-form-ng';

import { AppCommonModule } from '../../common/common.module';
import { AppStaticSliderComponent } from './slider.component';
import { AppStaticSliderDefaultComponent } from './default/default.component';
import { AppStaticSliderDisabledComponent } from './disabled/disabled.component';
import { AppStaticSliderRequiredComponent } from './required/required.component';
import { AppStaticSliderValueComponent } from './value/value.component';
import { AppStaticSliderRangeComponent } from './range/range.component';
import { AppStaticSliderTooltipComponent } from './tooltip/tooltip.component';
import { AppStaticSliderTicksComponent } from './ticks/ticks.component';
import { AppStaticSliderMinMaxComponent } from './min-max/min-max.component';
import { AppStaticSliderStepComponent } from './step/step.component';

const Declarations = [
  AppStaticSliderComponent,
  AppStaticSliderDefaultComponent,
  AppStaticSliderDisabledComponent,
  AppStaticSliderRequiredComponent,
  AppStaticSliderValueComponent,
  AppStaticSliderRangeComponent,
  AppStaticSliderTooltipComponent,
  AppStaticSliderTicksComponent,
  AppStaticSliderMinMaxComponent,
  AppStaticSliderStepComponent
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
export class AppStaticSliderModule {
}
