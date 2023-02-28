import React from 'react';
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import css from './Slider.module.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import { SliderProducts } from '../../data/products.js';

const Slider = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            720: { slidesPerView: 3 },
          }}
          className="swiper_container"
        >
          {SliderProducts.map((slide, i) => (
            <SwiperSlide>
              <div className={css.sLeft}>
                <div className={css.sName}>
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>
                <span>{slide.price}$</span>
                <div>Shop now</div>
              </div>
              <img src={slide.img} alt="product" className={css.sImage} />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div
              className={`swiper-button-prev slider-arraw ${css.swiperButton}`}
            ></div>
            <div
              className={`swiper-button-next slider-arraw ${css.swiperButton}`}
            ></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
