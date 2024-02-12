import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputPropsType {
  value: string;
  style?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const CustomInput = ({
  value = '',
  style,
  placeholder = '내용을 입력하세요.',
  onChange,
}: InputPropsType) => {
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      value={value}
      className={twMerge(
        `block w-full rounded-[999px] text-black py-3 px-4 outline-none placeholder:text-gray300 border-2 border-black
         hover:bg-gray100 hover:border-gray300 focus:outline-none focus:bg-white focus:border-primary-100 disabled:gray200 disabled:bg-gray100 disabled:text-gray300 ${style && style}`,
      )}
      placeholder={placeholder}
      onChange={handleChangeValue}
    ></input>
  );
};

export default CustomInput;
