"use client";

import React, { useLayoutEffect } from "react";
import MainLayout from "../Layouts/MainLayout";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import Post from "../components/Post";
import { signIn, signOut, useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import MiddleCardTweet from "../components/MiddleCardTweet";
import { redirect } from "next/navigation";
import { MainContext, useContext } from "../components/Context";
function page() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });
  const [postData, setPostData] = useState<any>([]);

  console.log("irfan data HomePage", session?.user?.accessToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://localhost:7197/api/Post?UserId=${session?.user.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        }
      );

      const postData = await response.json();
      setPostData(postData);
      console.log(postData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [setPostData]);

  const deneme = {
    postData,
    setPostData,
    fetchPosts,
  };

  return (
    <MainContext.Provider value={deneme}>
      <MainLayout>
        <div>
          <MiddleCardTweet />

          <div>
            {postData.map((posts: any) => (
              <Post props={posts} />
            ))}
          </div>
        </div>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default page;
