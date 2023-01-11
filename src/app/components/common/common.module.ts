import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppCodeComponent } from './code/code.component';

const Declarations = [
  AppCodeComponent
];

@NgModule({
  imports: [
    CommonModule,

    MatTabsModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: Declarations,
  exports: Declarations,
})
export class AppCommonModule {
}
