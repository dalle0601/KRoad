import { Logo } from './Logo';
import Navbar from './navbar/Navbar';

function CommonHeader() {
  return (
    <div className="flex justify-between items-center h-[80px] px-8">
      <div className="flex items-center flex-grow gap-16">
        <Logo />
        <Navbar />
      </div>
      <div className="font-[500] cursor-pointer text-white bg-primary rounded-full px-4 py-2">
        로그인
      </div>
    </div>
  );
}

export default CommonHeader;
