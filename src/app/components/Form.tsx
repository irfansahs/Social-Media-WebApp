"use client";

import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import SignInButton from "./SignInButton";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Form(props: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  // 359247775554-f776m6md9juksvfh4anfccfmsroc32o0.apps.googleusercontent.com

  const onSubmit = (data: any) => {
    data.preventDefault();
    // API'ye kimlik bilgilerini gönderin.

    fetch("https://localhost:7197/api/User/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Kullanıcıyı oturum açmış olarak işaretleyin.

          console.log(data);
        } else {
          // Kimlik bilgileri yanlışsa, bir hata gösterin.
          localStorage.setItem("jwt", data.accessToken);
          console.log(data.accessToken);
          // ...
        }
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
            required
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
            required
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

        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}
