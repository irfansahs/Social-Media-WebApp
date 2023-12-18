"use client";

import React from "react";
import MainLayout from "../Layouts/MainLayout";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import Post from "../components/Post";
import { signIn, signOut, useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import MiddleCardTweet from "../components/MiddleCardTweet";

function page() {
  const [users, setUsers] = useState([]);
  const { data: session } = useSession();
  
  console.log("irfan data", session?.user?.accessToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://localhost:7197/api/Post?UserName=Ahmet", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
      });

     
      const users = await response.json();
      setUsers(users);
      console.log(users);
    };
    fetchUsers();
  }, []);

  return (
    <MainLayout>
      <div>
        <MiddleCardTweet />

        <div>
          {users.map((user: any) => (
            <Post key={user.id} user={user} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default page;