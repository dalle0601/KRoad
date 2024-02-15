import React from 'react';
import img1 from '@/assets/경복궁.png';
import img2 from '@/assets/경주.png';
import img3 from '@/assets/제천.png';
import img4 from '@/assets/travelChart.png';
import { ICard, ICardData } from '@/types/card';
import CommonCard from '../common/ui/CommonCard';

interface ITripData {
  tripdata: ICardData[];
}

const MyHotPlace = ({ tripdata }: ITripData) => {
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
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center text-2xl text-headTitle font-semibold pt-20">
        <p>내 주변에는 이런</p>
        <p>핫플이 있어요!</p>
      </div>
      <div className="flex justify-center items-center p-4 text-xs text-gray-500">
        <p>Do what you can, with what you have, where you are.</p>
      </div>
      <div className="rounded-full bg-primary-500 w-fit px-4 py-2 m-auto cursor-pointer hover:bg-blue-600">
        <p className="text-white">See all tours</p>
      </div>
      <div className="flex gap-10 w-3/4 ">
        {slideData.map((slide, idx) => {
          return (
            <CommonCard
              key={slide.id}
              id={'slide.id'}
              firstimage={slide.url}
              title={slide.title}
              areaText={slide.area}
              frameStyle={`${
                idx === 0 || idx === 3
                  ? 'relative top-[-70px] p-3 h-full w-full rounded-2xl'
                  : 'p-3 h-[90%] w-[90%] rounded-2xl'
              }`}
              imgStyle={`${
                idx === 0 || idx === 3
                  ? 'rounded-2xl w-full h-[160px]'
                  : 'rounded-2xl w-[140px] h-[140px]'
              }`}
              contentFrameStyle={'p-0'}
              titleStyle={'font-semibold text-sm'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyHotPlace;
