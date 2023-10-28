"use client";

import Leftsidebar from "../components/Leftsidebar";
import RightsideBar from "../components/RightsideBar";

function MainLayout({ children }: any) {
  return (
    <div className="max-w-[1200px] mx-auto h-screen grid grid-cols-5 ">
      <div className=" col-span-1 justify-center">
        <Leftsidebar />
      </div>

      <div className=" col-span-3">{children}</div>

      <div className=" col-span-1">
        <RightsideBar />
      </div>
    </div>
  );
}

export default MainLayout;
