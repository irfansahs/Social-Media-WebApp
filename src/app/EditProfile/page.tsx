"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { useForm, SubmitHandler } from "react-hook-form";
import { ColorPicker, ColorPickerChangeEvent } from "primereact/colorpicker";
import { signIn, signOut, useSession } from "next-auth/react";

export default function page() {
  const toast = useRef<Toast | null>(null); // Toast yerine uygun tipi belirtin
  const [mainColor, setMainColor] = useState<string>("");
  const [profilePhoto, setProfilePhoto] = useState<string>("");

  const { data: session } = useSession();

  const show = (message: string, info: any) => {
    toast.current?.show({
      severity: info,
      summary: message,
      detail: "value",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

    const postData = {
      userName: session?.user.userName,
      email: data.email,
      password: data.password,
      profileImage: profilePhoto,
      userColor: mainColor,
    };

    fetch("https://localhost:7197/api/User", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          show("Update success", "success");
        } else {
          show("Update Error", "error");
        }
      });
  };

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

    
    return colors[0];
  };

  return (
    <div className="max-w-[1200px] mx-auto h-screen  justify-content-center items-center">
      <div className=" flex justify-center  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Toast ref={toast} />

          <div className="flex flex-col bg-slate-300 rounded-lg p-4">
          
          <div className="m-2 w-10 py-1">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src={session?.user?.profileImage}
              alt=""
            />
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
          
            <div className="mb-4 flex justify-center ">
              <div className="card flex justify-content-center">
                <ColorPicker
                  inputId="cp-hex"
                  format="hex"
                  value={mainColor}
                  onChange={(e: ColorPickerChangeEvent) =>
                    setMainColor(e.value as string)
                  }
                />
              </div>

              <p className="m-2">Choose your color</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email"
                value={session?.user?.email as string}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  Please choose a username.
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Phone Number"
                value={session?.user?.email as string}
                {...register("phoneNumber", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  Please enter a number
                </p>
              )}
            </div>


            <Button label="Submit" type="submit" icon="pi pi-check" />
          </div>
        </form>
      </div>
    </div>
  );
}
