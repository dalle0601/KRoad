'use client';
import React, { useEffect, useState } from 'react';
import img1 from '@/assets/경복궁.png';
import img2 from '@/assets/경주.png';
import img3 from '@/assets/제천.png';
import img4 from '@/assets/travelChart.png';
import { ICard, ICardData } from '@/types/card';
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from '../slider/Slider';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ITripData {
  tripdata: ICardData[];
}

const TourPackage = ({ tripdata }: ITripData) => {
  const slideData: ICard[] = [
    {
      id: 1,
      url: img1,
      title: '경복궁',
      content: 'Fall in love among the winding streets and snow-covered',
      area: '서울',
      rating: 4.9,
      cost: 3000,
      spendTime: 3,
    },
    {
      id: 2,
      url: img2,
      title: '경주',
      content: 'History is not about the past but a map of the past',
      area: '서울',
      rating: 4.9,
      cost: 3000,
      spendTime: 40,
    },
    {
      id: 3,
      url: img3,
      title: '제천',
      content: 'The unique character as a symbol of taste and ostentation',
      area: '서울',
      rating: 4.9,
      cost: 3000,
      spendTime: 48,
    },
    {
      id: 4,
      url: img4,
      title: 'zzzzz',
      content: 'test',
      area: '인터넷',
      rating: 3,
      cost: 0,
      spendTime: 0.6,
    },
    {
      id: 5,
      url: img2,
      title: '경주22222',
      content: 'You dont want to pitch a tent and live inside the Louvre',
      rating: 4.9,
      cost: 3000,
      spendTime: 48,
    },
    {
      id: 6,
      url: img3,
      title: '제천22222222222',
      content: 'hello',
      rating: 4.9,
      cost: 3000,
      spendTime: 48,
    },
  ];

  console.log(tripdata);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tripdata.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tripdata.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="flex flex-col py-20 w-full h-fit">
      <div className="flex justify-between">
        <div>
          <div className="text-xs text-primary-500 font-semibold">
            TOUR PACKAGE
          </div>
          <div className="text-2xl text-headTitle font-semibold">
            우리 함께 떠나보아요.
          </div>
        </div>
        <div className="flex items-center gap-x-1 text-primary-500">
          <button
            className={` ${
              currentIndex === 0 ? 'opacity-50 cursor-default' : ''
            } rounded-full bg-primary-500 bg-opacity-20 p-2 hover:bg-opacity-70`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>
          <button
            className={`${
              currentIndex === tripdata.length - 4
                ? 'opacity-50 cursor-default'
                : ''
            } rounded-full bg-primary-500 bg-opacity-20 p-2 hover:bg-opacity-70`}
            onClick={nextSlide}
            disabled={currentIndex === tripdata.length - 4}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div>
        <div className="flex gap-10 pt-20">
          <Slider
            slideData={tripdata}
            currentIndex={currentIndex}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default TourPackage;
