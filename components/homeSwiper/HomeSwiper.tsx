'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import img1 from '../../assets/경복궁.png';
import img2 from '../../assets/경주.png';
import img3 from '../../assets/제천.png';
const slideData = [
  {
    id: 1,
    url: img1,
    title: '경복궁',
    content:
      'fjkdslfjsa kldfjadlskfjd sklgjsdklbjd cklxbjdkljfghjb;jfd khg;kjla shvj;kma dhblknfvbxclk',
  },
  {
    id: 2,
    url: img2,
    title: '경주',
    content:
      'fjkdslfj sakldfjadlskf jdsk lgjsd kl bjdck lxbjd  kljfghjb;jf dkhg;kjlashvj; kmadhbl knfvbxclk',
  },
  {
    id: 3,
    url: img3,
    title: '제천',
    content:
      'fjkdslfjsakl fjadlskf jdsklgjsdklbjdcklxbjdkljfghj b;jfdkhg;kjlashvj;kmadh blknfvbxclk',
  },
];

const HomeSwiper = () => {
  return (
    <>
      <div className="">
        <Swiper
          className="my-swiper"
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
              <div className="flex">
                <div className="mt-[80px]">
                  <input type="text" className="border-2 border-sky-500" />
                  <h1 className="font-[700] text-4xl mt-5 ml-1">
                    {slide.title}
                  </h1>
                  <p className="w-3/5 break-keep mt-5 ml-2 font-[500]">
                    {slide.content}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={slide.url}
                    width={900}
                    height={628}
                    alt="Picture of the author"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};

export default HomeSwiper;
