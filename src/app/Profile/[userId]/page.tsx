import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Post from "@/app/components/Post";


function page(props: any) {
  return (
    <MainLayout>
      <div>
        <div className=" bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 rounded-lg relative mx-auto flex h-full w-full max-w-2xl flex-col items-center  bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
          <div className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover">
            <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
              <img
                className="h-full w-full rounded-full"
                src="https://i.ibb.co/6YbS9ff/avatar11.png"
                alt=""
              />
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-bluePrimary text-xl font-bold">
              Adela Parkson
            </h4>
            <p className="text-lightSecondary text-base font-normal">
              @Product Manager
            </p>
          </div>
          <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-bluePrimary text-2xl font-bold">17</h3>
              <p className="text-lightSecondary text-sm font-normal">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-bluePrimary text-2xl font-bold">9.7K</h3>
              <p className="text-lightSecondary text-sm font-normal">
                Followers
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-bluePrimary text-2xl font-bold">434</h3>
              <p className="text-lightSecondary text-sm font-normal">
                Following
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <a href="" className=" float-right">
                <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                  +
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>



<Post/>


    </MainLayout>
  );
}

export default page;
