"use client";

import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Post from "../../components/Post";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function page({ params }: any) {
  
  const [users, setUsers] = useState([]);
  const { data: session } = useSession();

  console.log("irfan data", session?.user?.accessToken);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://localhost:7197/api/Post/GetPostByContent?UserName=Ahmet&Content=${params.query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
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
        {users.map((user: any) => (
          <Post key={user.id} user={user} />
        ))}
      </div>
    </MainLayout>
  );
}

export default page;
