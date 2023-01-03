import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';

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
    MatStepperModule,

    AppStaticTextModule,
    AppStaticNumberModule,
    AppStaticTextareaModule,
    AppStaticSelectModule,
    AppStaticAutocompleteModule,
    AppStaticDatepickerModule,
    AppStaticSliderModule,
    AppStaticSwitchModule,
    AppStaticCheckboxModule,
    AppStaticRadioModule
  ],
  declarations: [AppStaticComponent],
  exports: [AppStaticComponent]
})
export class AppStaticModule {
}
