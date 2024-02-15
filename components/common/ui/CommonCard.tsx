import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { ICard, ICardData } from '@/types/card';
import { twMerge } from 'tailwind-merge';

const CommonCard = ({
  id,
  firstimage,
  title,
  content,
  areaText,
  sigunguText,
  rating,
  frameStyle,
  imgStyle,
  contentFrameStyle,
  titleStyle,
  areaStyle,
}: ICardData) => {
  return (
    <div
      className={twMerge(
        `flex flex-col max-w-[370px] gap-y-2 cursor-pointer h-[400px] shadow-lg mt-10 lg:hover:scale-110 transition-transform ease-in-out duration-500 rounded-2xl ${
          frameStyle && frameStyle
        }`,
      )}
    >
      {firstimage && (
        <Image
          className={twMerge(
            `w-[370px] h-[177.47px] rounded-t-2xl object-fill ${
              imgStyle && imgStyle
            }`,
          )}
          src={firstimage}
          alt=""
          width={200}
          height={200}
        />
      )}
      <div className={twMerge(`p-4 ${contentFrameStyle && contentFrameStyle}`)}>
        <div className="flex items-baseline gap-1">
          {title && (
            <div className="flex items-start font-semibold w-[170px] h-[170px] max-w-[170px]">
              {title}
            </div>
          )}
          {rating && (
            <div className="flex bg-opacity-15 bg-yellow items-center justify-center rounded-xl w-fit px-2">
              <FaStar className="text-yellow" />
              <div className="text-yellow ml-1">{rating}</div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1">
          {areaText && (
            <div className={twMerge(`text-xs ${titleStyle && titleStyle}`)}>
              {areaText}, {sigunguText}
            </div>
          )}
        </div>
        {/* <div className="flex justify-between items-baseline">
          <p className="text-primary-500 font-semibold text-xl">$ {cost}</p>
          <p className="text-xs">약 {spendTime} 시간</p>
        </div> */}
      </div>
    </div>
  );
};

export default CommonCard;
