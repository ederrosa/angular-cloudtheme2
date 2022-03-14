import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404Component } from './error404/error404.component';
import { MaterialModule } from 'src/app/core/configurations/material/material.module';

const SIMAF_ERROR_COMPONENTS_LIST = [
    Error404Component
]

@NgModule({
    declarations: [
        ...SIMAF_ERROR_COMPONENTS_LIST
    ],
    imports: [
        CommonModule,
        MaterialModule

    ], exports: [
        ...SIMAF_ERROR_COMPONENTS_LIST
    ],
    providers: [

    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ErrorModule { }
