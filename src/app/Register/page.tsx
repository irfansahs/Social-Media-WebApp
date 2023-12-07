"use client";

import React, { useRef } from "react";
import MainLayout from "../Layouts/MainLayout";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import UploadPhoto from "../components/UploadPhoto";
import { Toast } from 'primereact/toast';
import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';
import { signIn, signOut, useSession } from "next-auth/react";

function page() {
  const [mainColor, setMainColor] = useState<string>("");
  const toast = useRef<Toast>(null);

  const showSuccess = () => {
      toast.current?.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [profilePhoto, setProfilePhoto] = useState<string>("");


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      setProfilePhoto(file.name);
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target?.result as string;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, img.width, img.height);

          const imageData = ctx?.getImageData(0, 0, img.width, img.height);
          const hexColor = calculateHexColor(imageData?.data);

          if (hexColor) {
            setMainColor(hexColor);
            console.log(hexColor);
          }
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const calculateHexColor = (
    pixelData: Uint8ClampedArray | undefined
  ): string | undefined => {
    if (!pixelData) return undefined;

    const colors: string[] = [];
    for (let i = 0; i < pixelData.length; i += 4) {
      const hex = `#${pixelData[i].toString(16).padStart(2, "0")}${pixelData[
        i + 1
      ]
        .toString(16)
        .padStart(2, "0")}${pixelData[i + 2].toString(16).padStart(2, "0")}`;
      colors.push(hex);
    }

    // Use the first color as the average color
    return colors[0];
  };




  const onSubmit = (data: any) => {
    console.log(data);

    const postData = {
      userName: data.username,
      email: data.email,
      password: data.password,
      profileImage: profilePhoto,
      userColor: mainColor,
    };

    fetch("https://localhost:7197/api/User", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
          console.log(postData);
      });
      router.push("/");

  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-w-xs">
        <UploadPhoto />
      </div>
      <div className="w-full max-w-xs">
        <div>
          <input type="file" onChange={handleFileChange} accept="image/*" />
          {mainColor && (
            <div>
              <p>Main Color:</p>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: mainColor,
                }}
              ></div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 flex justify-center ">
          <div className="card flex justify-content-center">

            <ColorPicker inputId="cp-hex" format="hex"  value={mainColor} onChange={(e: ColorPickerChangeEvent) => setMainColor(e.value as string)} />
        </div>

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
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
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
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).+$/i,
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                Password must contain uppercase, punctuation, and numeric
                characters.
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
