"use client";

import React from "react";
import MainLayout from "../Layouts/MainLayout";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { ColorPicker } from "primereact/colorpicker";
import UploadPhoto from "../components/UploadPhoto";

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [profilePhoto, setProfilePhoto] = useState();

  const handleProfilePhoto = async (req: any, res: any) => {
    const profilePhotoFile = req.file;

    if (profilePhotoFile.size > 2048000) {
      const resizedProfilePhoto = await profilePhotoFile.resize(500, 500);
      setProfilePhoto(resizedProfilePhoto);
    } else {
      setProfilePhoto(profilePhotoFile);
    }

    res.send(profilePhoto);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    fetch("https://localhost:7197/api/User", {
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
          console.log(data);
          // ...
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center"><div className="mb-4">
            <UploadPhoto />
          </div>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          
          <div className="mb-4 flex justify-center ">
            <ColorPicker />
            <p className="m-2">Choose your color</p>
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                Please choose a email.
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
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default page;
