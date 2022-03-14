import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES_LIST = [
  MatDialogModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULES_LIST,

  ],
  exports: [
    ...MATERIAL_MODULES_LIST
  ],
  providers: [

  ]
})
export class MaterialModule { }