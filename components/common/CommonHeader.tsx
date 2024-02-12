import { Logo } from './Logo';
import Navbar from './navbar/Navbar';

function CommonHeader() {
  return (
    <div className="w-[1440px] flex justify-between items-center h-[80px]">
      <div className="flex items-center gap-20">
        <Logo />
        <Navbar />
        <div className="text-gray-800">로그인</div>
      </div>
    </div>
  );
}

export default CommonHeader;
