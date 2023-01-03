import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppStaticSliderComponent } from './slider.component';
import { AppStaticSliderDefaultComponent } from './default/default.component';

const Declarations = [
  AppStaticSliderComponent,
  AppStaticSliderDefaultComponent
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
export class AppStaticSliderModule {
}
