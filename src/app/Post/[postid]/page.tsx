"use client";

import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Post from "../../components/Post";
import Comments from "@/app/components/Comments";

import { useState, useEffect } from "react";
import WriteComment from "@/app/components/WriteComment";
function page({ params }: any) {
  const [users, setUsers] = useState([]);

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
  }, []);

  return (
    <MainLayout>
      <div>
        <WriteComment postid={params.postid} />
        {users.map((user: any) => (
          <Comments key={user.id} user={user} />
        ))}
      </div>
    </MainLayout>
  );
}

export default page;
