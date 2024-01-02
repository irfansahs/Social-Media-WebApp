"use client";

import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Post from "@/app/components/Post";
import { useState, useEffect } from "react";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { signIn, signOut, useSession } from "next-auth/react";

interface Profile {
  userName: string;
  profileImage: string;
  userColor: string;
  followCount:number;
  followersCount:number;
  isFollow:boolean;
}

function page({ params }: any) {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const { data: session } = useSession();

  console.log("irfan data", session?.user);

  

  const CreateFollow = async () => {
    try {
      const response = await fetch(`https://localhost:7197/api/Follow`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({ followTo: params.UserName, userName: session?.user?.userName }),
      });

      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
    fetchProfile();
    fetchPosts();
  };
  const DeleteFollow = async () => {
    try {
      const response = await fetch(`https://localhost:7197/api/Follow`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({ followTo:params.UserName , userName: session?.user?.userName }),
      });

      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error:", error);
    }


    fetchProfile();
    fetchPosts();
  };

  // ilk #0098b7
  // ikinci 

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://localhost:7197/api/User/GetUserByName?UserName=${session?.user?.userName}&ProfileName=${params.UserName}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const profiles = await response.json();
        setProfile(profiles);
        console.log(profiles);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://localhost:7197/api/Post/GetAllPostsByUserName?UserName=${params.UserName}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${"a"}`,
            },
          }
        );

        const users = await response.json();
        setUsers(users);
        console.log(users);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

  useEffect(() => {

    fetchProfile();
    fetchPosts();
  }, []); 


  return (
    <MainLayout>
      <div>
        <div style={{ background: `linear-gradient(90deg, #78909c 0%, #0098b7 50%, ${profile?.userColor} 100%)` }} className="  rounded-lg relative mx-auto flex h-full w-full max-w-2xl flex-col items-center  bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
          <div
            className=" relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
          >
            <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full">
                <img
                className=" rounded-full"
                  src={profile?.profileImage}
                  alt={profile?.profileImage}
                />
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-bluePrimary text-xl font-bold">
              @{params.UserName}
            </h4>
          </div>
          <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-bluePrimary text-2xl font-bold">17</h3>
              <p className="text-lightSecondary text-sm font-normal">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-bluePrimary text-2xl font-bold">{profile?.followersCount}</h3>
              <p className="text-lightSecondary text-sm font-normal">
                Followers
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-bluePrimary text-2xl font-bold">{profile?.followCount}</h3>
              <p className="text-lightSecondary text-sm font-normal">
                Following
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">




            {profile?.followCount} Is FollowEd:
            {profile?.isFollow ? (
              <button
                onClick={DeleteFollow}
                className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full"
              >
               -
              </button>
            ) : (
              <button
               onClick={CreateFollow}
               className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full"
             >
              +
             </button>
            )} 

            </div>
          </div>

        </div>
        <div>
        <div>
            <Post  request={`https://localhost:7197/api/Post/GetAllPostsByUserName?UserName=${params.UserName}`} />
        </div>
        </div>
      </div>
    </MainLayout>
  );
}
export default page;
