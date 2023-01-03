import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppStaticNumberComponent } from './number.component';
import { AppStaticNumberDefaultComponent } from './default/default.component';
import { AppStaticNumberDisabledComponent } from './disabled/disabled.component';
import { AppStaticNumberRequiredComponent } from './required/required.component';
import { AppStaticNumberPlaceholderComponent } from './placeholder/placeholder.component';
import { AppStaticNumberValueComponent } from './value/value.component';
import { AppStaticNumberMinMaxComponent } from './min-max/min-max.component';
import { AppStaticNumberStepComponent } from './step/step.component';
import { AppStaticNumberHintComponent } from './hint/hint.component';
import { AppStaticNumberValidationComponent } from './validation/validation.component';

const Declarations = [
  AppStaticNumberComponent,
  AppStaticNumberDefaultComponent,
  AppStaticNumberDisabledComponent,
  AppStaticNumberRequiredComponent,
  AppStaticNumberPlaceholderComponent,
  AppStaticNumberValueComponent,
  AppStaticNumberMinMaxComponent,
  AppStaticNumberStepComponent,
  AppStaticNumberHintComponent,
  AppStaticNumberValidationComponent,
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
export class AppStaticNumberModule {
}
