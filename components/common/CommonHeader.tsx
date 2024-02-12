import { Logo } from './Logo';
import Navbar from './navbar/Navbar';

function CommonHeader() {
  return (
    <div className="flex justify-between items-center h-[80px] px-8">
      <div className="flex items-center flex-grow gap-16">
        <Logo />
        <Navbar />
      </div>
      <div className="text-gray-800">로그인</div>
    </div>
  );
}

export default CommonHeader;
