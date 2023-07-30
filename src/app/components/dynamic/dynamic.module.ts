import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UniFormModule } from 'uni-form-ng';

import { AppDynamicComponent } from './dynamic.component';
import { AppDynamicSelectModule } from './select/select.module';
import { AppDynamicAutocompleteModule } from './autocomplete/autocomplete.module';
import { AppDynamicSwitchModule } from './switch/switch.module';
import { AppDynamicCheckboxModule } from './checkbox/checkbox.module';
import { AppDynamicRadioModule } from './radio/radio.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    UniFormModule,

    AppDynamicSelectModule,
    AppDynamicAutocompleteModule,
    AppDynamicSwitchModule,
    AppDynamicCheckboxModule,
    AppDynamicRadioModule
  ],
  declarations: [AppDynamicComponent],
  exports: [AppDynamicComponent],
})
export class AppDynamicModule {
}
