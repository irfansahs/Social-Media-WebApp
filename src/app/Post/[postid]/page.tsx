"use client";

import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Post from "../../components/Post";
import Comments from "@/app/components/Comments";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import WriteComment from "@/app/components/WriteComment";
function page({ params }: any) {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState();
  const { data: session } = useSession();

  console.log("irfan data", session?.user?.accessToken);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://localhost:7197/api/Comments?PostId=${params.postid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const users = await response.json();
      setUsers(users);
      console.log(users);
    };
    fetchUsers();

    const fetchPosts = async () => {
      const response = await fetch(
        `https://localhost:7197/api/Post/GetPostById?UserName=${session?.user.userName}&PostId=${params.postid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const posts = await response.json();
      setPosts(posts);
      console.log(posts);
    };
    fetchPosts();
  }, [posts]);

  return (
    <MainLayout>
      <div>
        <Post user={posts} />

        <WriteComment postid={params.postid} />
        {users.map((user: any) => (
          <Comments key={user.id} user={user} />
        ))}
      </div>
    </MainLayout>
  );
}

export default page;
