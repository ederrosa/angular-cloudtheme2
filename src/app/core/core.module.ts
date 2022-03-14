import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperService } from './services/swiper.service';

const CORE_SERVICES_LIST = [
  SwiperService,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
  ],
  providers: [
    ...CORE_SERVICES_LIST
  ]
})
export class CoreModule { }
