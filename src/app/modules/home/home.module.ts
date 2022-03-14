import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main/main-home.component';

@NgModule({
  declarations: [MainHomeComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    MainHomeComponent,
  ],providers:[
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
