"use client";

import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import SignInButton from "./SignInButton";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Form(props: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const { data: session } = useSession();
  const { data: jwt } = useSession();
  

  console.log(session);
  console.log(jwt);


  const onSubmit = (data: any) => {

    fetch("https://localhost:7197/api/User/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
      });
    router.push("/Home");
  };
  
 
  return (
    <div className=" justify-center   bg-slate-100 rounded">
      <SignInButton />
    </div>
  );
}
