import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <ul className="flex gap-10 font-[500]">
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
  );
};

export default Navbar;
