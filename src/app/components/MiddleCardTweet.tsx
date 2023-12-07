import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";

const MiddleCardTweet = (username:any) => {
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    data.userName = "Ahmet";

    console.log(data);
    fetch("https://localhost:7197/api/Post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center  bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900  rounded-lg mx-6">
        <div>
          <div className="m-2 w-10 py-1">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src={`${session?.user?.image}`}
              alt=""
            />
          </div>
          <textarea
            className=" bg-transparent text-gray-400 font-medium text-lg w-full"
            placeholder="What's happening?"
            {...register("content", { required: true })}
          ></textarea>
        </div>
        <div className="flex">
          <div className="w-10"></div>

          <div className="w-64 px-2">
            <div className="flex items-center">
              <div className="flex-1 text-center px-1 py-1 m-2">
                <a
                  href="#"
                  className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <button
              type="submit"
              className="bg-gradient-to-tl from-gray-400 via-sky-700 to-blue-900 hover:opacity-70 mt-5 text-white font-bold py-2 px-8 rounded-full mr-8 float-right"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MiddleCardTweet;
