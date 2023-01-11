import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppStartComponent } from './components/start/start.component';
import { AppStaticComponent } from './components/static/static.component';
import { AppStaticTextComponent } from './components/static/text/text.component';
import { AppStaticNumberComponent } from './components/static/number/number.component';
import { AppStaticTextareaComponent } from './components/static/textarea/textarea.component';
import { AppStaticSelectComponent } from './components/static/select/select.component';
import { AppStaticAutocompleteComponent } from './components/static/autocomplete/autocomplete.component';
import { AppStaticDatepickerComponent } from './components/static/datepicker/datepicker.component';
import { AppStaticSliderComponent } from './components/static/slider/slider.component';
import { AppStaticSwitchComponent } from './components/static/switch/switch.component';
import { AppStaticCheckboxComponent } from './components/static/checkbox/checkbox.component';
import { AppStaticRadioComponent } from './components/static/radio/radio.component';
import { AppDynamicComponent } from './components/dynamic/dynamic.component';
import { AppCustomComponent } from './components/custom/custom.component';
import { AppDynamicSelectComponent } from './components/dynamic/select/select.component';
import { AppDynamicAutocompleteComponent } from './components/dynamic/autocomplete/autocomplete.component';
import { AppDynamicSwitchComponent } from './components/dynamic/switch/switch.component';
import { AppDynamicCheckboxComponent } from './components/dynamic/checkbox/checkbox.component';
import { AppDynamicRadioComponent } from './components/dynamic/radio/radio.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: AppStartComponent },
  { path: 'static', redirectTo: 'static/text', pathMatch: 'full' },
  {
    path: 'static', component: AppStaticComponent, children: [
      { path: 'text', component: AppStaticTextComponent },
      { path: 'number', component: AppStaticNumberComponent },
      { path: 'textarea', component: AppStaticTextareaComponent },
      { path: 'select', component: AppStaticSelectComponent },
      { path: 'autocomplete', component: AppStaticAutocompleteComponent },
      { path: 'datepicker', component: AppStaticDatepickerComponent },
      { path: 'slider', component: AppStaticSliderComponent },
      { path: 'switch', component: AppStaticSwitchComponent },
      { path: 'checkbox', component: AppStaticCheckboxComponent },
      { path: 'radio', component: AppStaticRadioComponent },
    ],
  },
  { path: 'dynamic', redirectTo: 'dynamic/select', pathMatch: 'full' },
  { path: 'dynamic', component: AppDynamicComponent,
    children: [
      { path: 'select', component: AppDynamicSelectComponent },
      { path: 'autocomplete', component: AppDynamicAutocompleteComponent },
      { path: 'switch', component: AppDynamicSwitchComponent },
      { path: 'checkbox', component: AppDynamicCheckboxComponent },
      { path: 'radio', component: AppDynamicRadioComponent },
    ]},
  { path: 'custom', component: AppCustomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
