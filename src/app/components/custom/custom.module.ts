import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { UniFormModule } from 'uni-form-ng';

import { AppCommonModule } from '../common/common.module';
import { AppCustomComponent } from './custom.component';
import { AppCustomFruitsComponent } from './fruits/fruits.component';
import { AppCustomSecondComponent } from './second/second.component';
import { AppCustomGroupComponent } from './group/group.component';
import {AppCustomCustomizationComponent} from "./customization/customization.component";

const Declarations = [
  AppCustomComponent,
  AppCustomFruitsComponent,
  AppCustomSecondComponent,
  AppCustomGroupComponent,
  AppCustomCustomizationComponent
];

@NgModule({
  imports: [
    CommonModule,

    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    UniFormModule,

    AppCommonModule,
  ],
  declarations: Declarations,
  exports: Declarations,
})
export class AppCustomModule {
}
