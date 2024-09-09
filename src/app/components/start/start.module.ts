import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { UniFormComponent, UniFormFieldComponent, UniFormGroupComponent } from 'uni-form-ng';

import { AppCommonModule } from '../common/common.module';
import { AppStartComponent } from './start.component';

@NgModule({
  imports: [MatExpansionModule, MatButtonModule, MatIconModule, AppCommonModule, UniFormComponent, UniFormGroupComponent, UniFormFieldComponent],
  declarations: [AppStartComponent],
  exports: [AppStartComponent],
})
export class AppStartModule {}
