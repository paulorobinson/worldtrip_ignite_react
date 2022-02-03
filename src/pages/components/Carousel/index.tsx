import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { CarouselItem } from './CarouselItem';

SwiperCore.use([Navigation, Pagination, Autoplay]);

type IContinents = {
  id: number;
  continentName: string;
  image: string;
  subtitle: string;
};

interface CarouselProps {
  continents: IContinents[];
}

export const Carousel = ({ continents }: CarouselProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
    >
      {continents.map(({ id, continentName, image, subtitle }) => (
        <SwiperSlide key={id}>
          <CarouselItem
            id={id}
            title={continentName}
            subtitle={subtitle}
            image={image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
