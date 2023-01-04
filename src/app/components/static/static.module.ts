import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppStaticComponent } from './static.component';
import { AppStaticTextModule } from './text/text.module';
import { AppStaticNumberModule } from './number/number.module';
import { AppStaticTextareaModule } from './textarea/textarea.module';
import { AppStaticSelectModule } from './select/select.module';
import { AppStaticAutocompleteModule } from './autocomplete/autocomplete.module';
import { AppStaticDatepickerModule } from './datepicker/datepicker.module';
import { AppStaticSliderModule } from './slider/slider.module';
import { AppStaticSwitchModule } from './switch/switch.module';
import { AppStaticCheckboxModule } from './checkbox/checkbox.module';
import { AppStaticRadioModule } from './radio/radio.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,

    AppStaticTextModule,
    AppStaticNumberModule,
    AppStaticTextareaModule,
    AppStaticSelectModule,
    AppStaticAutocompleteModule,
    AppStaticDatepickerModule,
    AppStaticSliderModule,
    AppStaticSwitchModule,
    AppStaticCheckboxModule,
    AppStaticRadioModule,
  ],
  declarations: [AppStaticComponent],
  exports: [AppStaticComponent],
})
export class AppStaticModule {
}
