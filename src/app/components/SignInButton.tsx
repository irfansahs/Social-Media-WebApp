"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Router, { useRouter } from "next/navigation";

const SignInButton = () => {
  const { data: account } = useSession();
  const { data: session } = useSession();
  
  console.log(account);
  const router = useRouter();


  const onSubmit = (e: any) => {
    e.preventDefault();
    // API'ye kimlik bilgilerini gönderin.
    fetch("https://localhost:7197/api/User/GoogleLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Kullanıcıyı oturum açmış olarak işaretleyin.
          console.log(data, account);
          router.push("/Home");
        } else {
          // Kimlik bilgileri yanlışsa, bir hata gösterin.
          console.log(data);
          // ...
        }
      });
  };

  if (session && session.user) {
    return (
      <div className="flex flex-col gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <img src={`${session.user.image}`} />
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <button
        onClick={() => signIn()}
        type="submit"
        className="text-green-600 ml-auto"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInButton;
