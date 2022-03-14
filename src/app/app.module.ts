import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './core/configurations/material/material.module';
import { CoreModule } from './core/core.module';
import { ErrorModule } from './modules/error/error.module';
import { HomeModule } from './modules/home/home.module';


registerLocaleData(localePt);

const MATERIAL_MODULES_LIST = [
  MaterialModule,
];

const MODULES_LIST = [
  CoreModule,
  ErrorModule,
  HomeModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...MATERIAL_MODULES_LIST,
    ...MODULES_LIST
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
