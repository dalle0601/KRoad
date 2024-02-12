import { Logo } from './Logo';

function CommonFooter() {
  return (
    <div className="w-full h-[200px] bg-primary-100 fixed bottom-0 left-0">
      <Logo />
      <div></div>
      <div></div>
    </div>
  );
}

export default CommonFooter;
