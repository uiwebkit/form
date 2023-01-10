import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { UniFormModule } from 'uni-form-ng';

import { AppCustomComponent } from './custom.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,
    UniFormModule,
  ],
  declarations: [AppCustomComponent],
  exports: [AppCustomComponent],
})
export class AppCustomModule {
}
