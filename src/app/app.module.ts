import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { UniFormModule } from 'uni-form-ng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStartModule } from './components/start/start.module';
import { AppStaticModule } from './components/static/static.module';
import { AppDynamicModule } from './components/dynamic/dynamic.module';
import { AppCustomModule } from './components/custom/custom.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatTabsModule,
    UniFormModule,

    AppRoutingModule,
    AppStartModule,
    AppStaticModule,
    AppDynamicModule,
    AppCustomModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
