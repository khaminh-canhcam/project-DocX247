import Swiper from "swiper";
import {
  Autoplay,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  EffectFade
} from "swiper/modules";

/**
 * @param swiperInit
 */
export function swiperInit() {
  // section-home-banner
  new Swiper(".section-banner", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1000,
    loop:true,
    autoplay:{
      delay:3000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      prevEl: ".btn-prev",
      nextEl: ".btn-next",
    },
    modules: [Navigation, Pagination, EffectFade, Autoplay],
  });

  new Swiper('.swiper-col',{
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 12,
      },
    },
  })

  new Swiper('.swiper-rows-avatar',{
    slidesPerView: 2,
    spaceBetween: 14,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },
  })

  new Swiper('.filter-product',{
    slidesPerView: 2,
    spaceBetween: 12,
     breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
    },
  })
}
