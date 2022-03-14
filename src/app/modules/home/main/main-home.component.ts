import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwiperService } from 'src/app/core/services/swiper.service';
import { API_CONFIGURATION } from 'src/configurations/api.configuration';
import Swiper from 'swiper';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit, OnDestroy{

  readonly theBaseOwner: string = API_CONFIGURATION.baseOwner;
  readonly theFacebookOwner: string = API_CONFIGURATION.facebookOwner;
  readonly theInstagranOwner: string = API_CONFIGURATION.instagranOwner;
  readonly theClient: string = API_CONFIGURATION.client;
  private theSwiper!: Swiper;
  private listImg = new Array(20);

  constructor(private theSwiperService: SwiperService,
    private dialog: MatDialog) { }

  getListImg(): Array<any> {
    return this.listImg;
  }

  ngOnInit(): void {
    this.theSwiper = this.theSwiperService.getSwiperCoverflow(
      'swiper-coverflow-container', 'swiper-coverflow-pagination');
  }

  ngOnDestroy() {
    this.dialog.closeAll();
    this.theSwiper.destroy();
  }
}
