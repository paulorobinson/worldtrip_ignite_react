import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { CarouselItem } from './CarouselItem';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      loop={true}
    >
      <SwiperSlide>
        <CarouselItem
          title="Europa"
          description="O continente mais antigo."
          image="./images/continents/europe.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="Europa"
          description="O continente mais antigo."
          image="./images/continents/europe.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="Europa"
          description="O continente mais antigo."
          image="./images/continents/europe.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="Europa"
          description="O continente mais antigo."
          image="./images/continents/europe.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};
