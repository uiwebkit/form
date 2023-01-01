import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

import { UniFormModule } from 'uni-form-ng';

import { AppComponent } from './app.component';
import { AppTestComponent } from './components/test/test.component';
import { AppAccessComponent } from './components/access/access.component';
import { AppSplitComponent } from './components/split/split.component';
import { AppManageComponent } from './components/manage/manage.component';
import { AppStaticComponent } from './components/static/static.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { GroupComponent } from './components/group/group.component';
import { CustomComponent } from './components/custom/custom.component';

import { AppStaticTextComponent } from './components/static/text/text.component';
import { AppStaticTextDefaultComponent } from './components/static/text/default/default.component';
import { AppStaticTextDisabledComponent } from './components/static/text/disabled/disabled.component';
import { AppStaticTextRequiredComponent } from './components/static/text/required/required.component';
import { AppStaticTextPlaceholderComponent } from './components/static/text/placeholder/placeholder.component';
import { AppStaticTextValueComponent } from './components/static/text/value/value.component';
import { AppStaticTextMaxLengthComponent } from './components/static/text/max-length/max-length.component';
import { AppStaticTextHintComponent } from './components/static/text/hint/hint.component';
import { AppStaticTextValidationComponent } from './components/static/text/validation/validation.component';
import { AppStaticTextPatternComponent } from './components/static/text/pattern/pattern.component';

import { AppStaticNumberComponent } from './components/static/number/number.component';
import { AppStaticNumberDefaultComponent } from './components/static/number/default/default.component';
import { AppStaticNumberDisabledComponent } from './components/static/number/disabled/disabled.component';
import { AppStaticNumberRequiredComponent } from './components/static/number/required/required.component';
import { AppStaticNumberPlaceholderComponent } from './components/static/number/placeholder/placeholder.component';
import { AppStaticNumberValueComponent } from './components/static/number/value/value.component';
import { AppStaticNumberMinMaxComponent } from './components/static/number/min-max/min-max.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatStepperModule,
    MatIconModule,

    UniFormModule,
  ],
  declarations: [
    AppComponent,

    AppTestComponent,
    AppAccessComponent,
    AppSplitComponent,
    AppManageComponent,

    AppStaticComponent,
    DynamicComponent,
    GroupComponent,
    CustomComponent,

    AppStaticTextComponent,
    AppStaticTextDefaultComponent,
    AppStaticTextDisabledComponent,
    AppStaticTextRequiredComponent,
    AppStaticTextPlaceholderComponent,
    AppStaticTextValueComponent,
    AppStaticTextMaxLengthComponent,
    AppStaticTextHintComponent,
    AppStaticTextValidationComponent,
    AppStaticTextPatternComponent,

    AppStaticNumberComponent,
    AppStaticNumberDefaultComponent,
    AppStaticNumberDisabledComponent,
    AppStaticNumberRequiredComponent,
    AppStaticNumberPlaceholderComponent,
    AppStaticNumberValueComponent,
    AppStaticNumberMinMaxComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
