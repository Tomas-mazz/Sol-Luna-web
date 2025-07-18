'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import styles from '../../../../../styles/ProductCard/Carousel.module.css';

export default function ProductCarousel({ imagesBackSide }) {
  const images = imagesBackSide || [];

  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect="coverflow"
        grabCursor={true}
        allowTouchMove={true}
        centeredSlides={true}
        slidesPerView="auto"
        navigation={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1.5,
          slideShadows: false,
        }}
        className={styles.swiper}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className={styles.slide}>
            <img src={src} alt={`Imagen ${i + 1}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}