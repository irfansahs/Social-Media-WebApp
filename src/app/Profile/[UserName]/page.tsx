"use client";

import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Post from "@/app/components/Post";
import { useState, useEffect } from "react";

function page({ params }: any) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://localhost:7197/api/Post/GetAllPostsByUserName?UserName=${params.UserName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${localStorage.getItem("jwt")} `,
          },
        }
      );

      const users = await response.json();
      setUsers(users);
      console.log(users);
    };
    fetchUsers();
  }, []);

  return (
    <MainLayout>
      <div>
        <div className=" bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 rounded-lg relative mx-auto flex h-full w-full max-w-2xl flex-col items-center  bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
          <div className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover">
            <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
             

            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-bluePrimary text-xl font-bold">
              @AdelaParkson
            </h4>
            <p className="text-lightSecondary text-base font-normal">
              @AdelaParkson
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
              <div className=" float-right">
                <div className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                  +
                </div>
              </div>
            </div>
          </div>

          <div>
            {users?.map((user: any) => (
              <Post key={user.id} user={user} />
            ))}
          </div>


        </div>
      </div>
    </MainLayout>
  );
}
export default page;
