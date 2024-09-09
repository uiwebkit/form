import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { UniFormComponent, UniFormFieldComponent } from 'uni-form-ng';

import { AppCommonModule } from '../../common/common.module';
import { AppStaticTextComponent } from './text.component';
import { AppStaticTextDefaultComponent } from './default/default.component';
import { AppStaticTextDisabledComponent } from './disabled/disabled.component';
import { AppStaticTextRequiredComponent } from './required/required.component';
import { AppStaticTextPlaceholderComponent } from './placeholder/placeholder.component';
import { AppStaticTextValueComponent } from './value/value.component';
import { AppStaticTextMinMaxComponent } from './min-max/min-max.component';
import { AppStaticTextHintComponent } from './hint/hint.component';
import { AppStaticTextValidationComponent } from './validation/validation.component';
import { AppStaticTextPatternComponent } from './pattern/pattern.component';

const Declarations = [
  AppStaticTextComponent,
  AppStaticTextDefaultComponent,
  AppStaticTextDisabledComponent,
  AppStaticTextRequiredComponent,
  AppStaticTextPlaceholderComponent,
  AppStaticTextValueComponent,
  AppStaticTextMinMaxComponent,
  AppStaticTextHintComponent,
  AppStaticTextValidationComponent,
  AppStaticTextPatternComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    AppCommonModule,
    UniFormComponent,
    UniFormFieldComponent,
  ],
  declarations: Declarations,
  exports: Declarations,
})
export class AppStaticTextModule {}
