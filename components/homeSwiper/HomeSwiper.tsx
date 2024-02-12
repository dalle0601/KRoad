'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../assets/경복궁.png';
import img2 from '../../assets/경주.png';
import img3 from '../../assets/제천.png';
import Image from 'next/image';

const slideData = [
  {
    id: 1,
    url: img1,
  },
  {
    id: 2,
    url: img2,
  },
  {
    id: 3,
    url: img3,
  },
];

const HomeSwiper = () => {
  return (
    <div className="w-1/2">
      <Swiper
        className="my-swiper"
        spaceBetween={10}
        slidesPerView={'auto'}
        pagination={{
          el: '.swiper-pagination', // Use a valid DOM element here
          type: 'bullets',
          clickable: true,
          bulletClass: 'bg-amber-400',
          bulletActiveClass: 'bg-green-400',
        }}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div>
              <Image
                src={slide.url}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default HomeSwiper;
