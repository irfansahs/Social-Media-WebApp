"use client";

import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Post from "../../components/Post";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function page({ params }: any) {
  
  const { data: session } = useSession();

  console.log("irfan data", session?.user?.accessToken);

  return (
    <MainLayout>
      <div>
          <Post request={`https://localhost:7197/api/Post/GetPostByContent?UserName=Ahmet&Content=${params.query}`} />
      </div>
    </MainLayout>
  );
}

export default page;
