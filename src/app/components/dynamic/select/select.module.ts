import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { UniFormModule } from 'uni-form-ng';

import { AppDynamicSelectComponent } from './select.component';
import { AppDynamicSelectDefaultComponent } from './default/default.component';
import { AppDynamicSelectMultiComponent } from './multi/multi.component';
import { AppDynamicSelectValueComponent } from './value/value.component';
import { AppDynamicSelectValueMultiComponent } from './value-multi/value.component';
import { AppDynamicSelectCleanComponent } from './clean/clean.component';

const Declarations = [
  AppDynamicSelectComponent,
  AppDynamicSelectDefaultComponent,
  AppDynamicSelectMultiComponent,
  AppDynamicSelectValueComponent,
  AppDynamicSelectValueMultiComponent,
  AppDynamicSelectCleanComponent
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
export class AppDynamicSelectModule {
}
