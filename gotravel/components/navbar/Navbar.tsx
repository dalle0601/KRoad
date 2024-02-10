import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-20">
        <div className="font-logoFont text-2xl">사방팔방</div>

        <ul className="flex gap-10">
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/">여행지</Link>
          </li>
          <li>
            <Link href="/">일정</Link>
          </li>
          <li>
            <Link href="/">내 주변 핫플</Link>
          </li>
        </ul>
      </div>
      <div>로그인</div>
    </div>
  );
};

export default Navbar;
