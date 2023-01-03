import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppStaticTextareaComponent } from './textarea.component';
import { AppStaticTextareaDefaultComponent } from './default/default.component';
import { AppStaticTextareaDisabledComponent } from './disabled/disabled.component';
import { AppStaticTextareaRequiredComponent } from './required/required.component';
import { AppStaticTextareaPlaceholderComponent } from './placeholder/placeholder.component';
import { AppStaticTextareaValueComponent } from './value/value.component';
import { AppStaticTextareaMinMaxComponent } from './min-max/min-max.component';
import { AppStaticTextareaHintComponent } from './hint/hint.component';
import { AppStaticTextareaValidationComponent } from './validation/validation.component';
import { AppStaticTextareaPatternComponent } from './pattern/pattern.component';

const Declarations = [
  AppStaticTextareaComponent,
  AppStaticTextareaDefaultComponent,
  AppStaticTextareaDisabledComponent,
  AppStaticTextareaRequiredComponent,
  AppStaticTextareaPlaceholderComponent,
  AppStaticTextareaValueComponent,
  AppStaticTextareaMinMaxComponent,
  AppStaticTextareaHintComponent,
  AppStaticTextareaValidationComponent,
  AppStaticTextareaPatternComponent
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
export class AppStaticTextareaModule {
}
