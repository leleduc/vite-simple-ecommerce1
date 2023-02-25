import React from 'react';
import css from './Testimonials.module.scss';
import Hero from '../../images/testimonialHero.png';
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsData } from '../../data/testimonials';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

const Testimonials = () => {
  return (
    <div className={css.container}>
      {/* Left Content */}
      <div className={css.wrapper}>
        <div className={css.side}>
          <span> Top Rated</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man
            childrent rejoiced.
          </span>
        </div>
        {/* Hero Image */}
        <img src={Hero} alt="" />

        {/* Right Content */}
        <div className={css.side}>
          <span> 100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      {/* Testimonials */}
      <div className={css.reviews}>Reviews</div>
      <div className={css.testimonials}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.swiperTestimonials}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="?" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
