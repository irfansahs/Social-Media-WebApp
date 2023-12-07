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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic">
              Please choose a username.
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          )}
        </div>

        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log in
          </button>
        </div>
        <div>
          <Link
            className="mt-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            href={"ForgotPassword"}
            type="submit"
          >
            Forgot Password ?
          </Link>
        </div>
        <div>
          <Link
            className="mt-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            href={"Register"}
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
