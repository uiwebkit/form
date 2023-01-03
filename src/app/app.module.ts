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
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { GroupComponent } from './components/group/group.component';
import { CustomComponent } from './components/custom/custom.component';

import { AppStaticModule } from './components/static/static.module';

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

    AppStaticModule,
  ],
  declarations: [
    AppComponent,

    AppTestComponent,
    AppAccessComponent,
    AppSplitComponent,
    AppManageComponent,

    DynamicComponent,
    GroupComponent,
    CustomComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
