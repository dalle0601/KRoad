import React from 'react';
import CommonHeader from './CommonHeader';
import CommonFooter from './CommonFooter';

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <CommonHeader />
      <div className="h-[calc(100vh-160px)">{children}</div>
      <CommonFooter />
    </div>
  );
}

export default CommonLayout;
