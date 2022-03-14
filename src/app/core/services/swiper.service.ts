import { Injectable } from '@angular/core';

// Import Swiper and modules
import { Swiper, Autoplay, EffectCoverflow, EffectCube, Keyboard, Navigation, Pagination, EffectFade } from 'swiper';

// Install modules
Swiper.use(
  [
    Autoplay,
    EffectCoverflow,
    EffectCube,
    EffectFade,
    Keyboard,
    Navigation,
    Pagination
  ]);

@Injectable({
  providedIn: 'root'
})
export class SwiperService {

  constructor() { }

  getSwiperFade(theClass: string, thePaginator: string): Swiper {
    return new Swiper(`.${theClass}`, {
      speed: 6000,
      effect: 'fade',
      spaceBetween: 30,
      centeredSlides: true,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: `.${thePaginator}`,
        clickable: true,
      },
      navigation: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }

  getSwiperSlider(theClass: string, thePaginator: string): Swiper {
    return new Swiper(`.${theClass}`, {
      speed: 2000,
      spaceBetween: 20,
      centeredSlides: true,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: `.${thePaginator}`,
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }

  getSwiperCoverflow(theClass: string, thePaginator: string): Swiper {
    return new Swiper(`.${theClass}`, {
      effect: 'coverflow',
      speed: 6000,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: `auto`,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: `.${thePaginator}`,
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }

  getSwiperScroll(theClass: string, thePaginator: string): Swiper {

    return new Swiper(`.${theClass}`, {
      direction: 'vertical',
      slidesPerView: 'auto',
      speed: 6000,
      autoplay: {
        disableOnInteraction: true,
      },
      freeMode: true,
      scrollbar: {
        el: `.${thePaginator}`,
        draggable: true,
        dragSize: 360,
      },
      mousewheel: true
    });
  }

  getSwiperCube(theClass: string, thePaginator: string, theDirection: boolean): Swiper {
    return new Swiper(`.${theClass}`, {
      effect: 'cube',
      direction: (theDirection) ? 'vertical' : 'horizontal',
      grabCursor: true,
      speed: 1500,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      cubeEffect: {
        shadow: false,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      pagination: {
        el: `.${thePaginator}`,
        clickable: true,
      },
    });
  }
}
