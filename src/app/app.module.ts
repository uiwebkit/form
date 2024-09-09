import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStartModule } from './components/start/start.module';
import { AppStaticModule } from './components/static/static.module';
import { AppDynamicModule } from './components/dynamic/dynamic.module';
import { AppCustomModule } from './components/custom/custom.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,

    MatTabsModule,

    AppRoutingModule,
    AppStartModule,
    AppStaticModule,
    AppDynamicModule,
    AppCustomModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' }}
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
