"use client";

import React from "react";
import MainLayout from "../Layouts/MainLayout";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import Post from "../components/Post";
import MiddleCardTweet from "../components/MiddleCardTweet";
import { signIn, signOut, useSession } from "next-auth/react";

function page() {
  const [users, setUsers] = useState([]);
  const { data: session } = useSession();
  console.log(session);


  console.log(localStorage.getItem("jwt"));

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://localhost:7197/api/Comments", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("jwt")} `,
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

        <Post />

        <div>
          {users.map((user: any) => (
            <Post key={user} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
