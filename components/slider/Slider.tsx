'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { ICard, ICardData } from '@/types/card';
import CommonCard from '../common/ui/CommonCard';

interface SliderProps {
  slideData: ICardData[];
  currentIndex: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

const Slider = ({
  slideData,
  currentIndex,
  nextSlide,
  prevSlide,
}: SliderProps) => {
  const [touchStartX, setTouchStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isSwiping) return;
    const touchEndX = event.touches[0].clientX;
    const touchDiff = touchStartX - touchEndX;
    if (touchDiff > 50) {
      nextSlide();
    } else if (touchDiff < -50) {
      prevSlide();
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  return (
    <div className="">
      <div
        className="flex gap-10"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slideData.map((item, index) => (
          <div
            key={index}
            className={`
              ${
                index >= currentIndex && index < currentIndex + 4
                  ? ''
                  : 'hidden'
              }
            `}
          >
            <CommonCard
              key={1}
              id={'1'}
              firstimage={item.firstimage}
              title={item.title}
              content={item.title}
              areaText={item.areaText}
              sigunguText={item.sigunguText}
              rating={4.5}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
