"use client";
import React, { useRef } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputNumber } from "primereact/inputnumber";

interface FormData {
  kod: number | null;
  email: number | null;
}

export default function page() {
  const toast = useRef<Toast | null>(null);

  const show = () => {
    toast.current?.show({
      severity: "success",
      summary: "Form Submitted",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    data.kod && show();

    fetch("https://localhost:7197/api/User/ConfirmEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          data.year && show();
        } else {
          data.year && show();
        }
      });
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-4 bg-slate-100  mt-4"
      >
        <Toast ref={toast} />

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="email"
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
            cod
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="number"
            placeholder="kod"
            {...register("kod", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              Please choose a username.
            </p>
          )}
        </div>

        <Button label="Submit" type="submit" icon="pi pi-check" />
      </form>
    </div>
  );
}
