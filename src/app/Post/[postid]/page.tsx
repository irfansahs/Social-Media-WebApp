"use client";

import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import PostAndComments from "@/app/components/PostAndComments";
import WriteComment from "@/app/components/WriteComment";
import { MainContext } from "@/app/components/Context";

function Page({ params }: any) {
  const [postData, setPostData] = useState<any>({});
  const { data: session } = useSession();

  console.log("irfan data PostPage", session?.user?.accessToken);

  const fetchPostData = async () => {
    try {
      const response = await fetch(
        `https://localhost:7197/api/Post/GetPostAndComments?UserId=${session?.user.userId}&PostId=${params.postid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const postData = await response.json();
      setPostData(postData);
      console.log(postData);
    } catch (error) {
      console.error("Error fetching post data:", error);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, [setPostData]);

 const deneme = {
  postData,
  setPostData,
  fetchPostData
 }

  return (
    <MainContext.Provider value={deneme}>
      <MainLayout>
        <div className="flex flex-col justify-center my-2 rounded-lg">
          <PostAndComments props={postData} />
          <WriteComment props={postData} />
        </div>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default Page;
