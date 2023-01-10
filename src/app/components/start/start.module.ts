import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStartComponent } from './start.component';

import { UniFormModule } from 'uni-form-ng';

@NgModule({
  imports: [
    CommonModule,

    UniFormModule,
  ],
  declarations: [AppStartComponent],
  exports: [AppStartComponent],
})
export class AppStartModule {
}
