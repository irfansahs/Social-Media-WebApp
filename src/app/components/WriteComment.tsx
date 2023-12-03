import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

function WriteComment(props:any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data: any) => {

    data.postid = props.postid;

    console.log(data);
    fetch("https://localhost:7197/api/Comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json());
  };

  return (
    <div className="flex mx-auto items-center justify-center shadow-lg mt-4 mb-4 max-w-2xl ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-gray-700 rounded-lg px-2 py-2  bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900"
      >
        <div className="w-full md:w-full px-2 mb-2 mt-2">
          <textarea
            className=" bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            placeholder="Type Your Comment"
            {...register("Content", { required: true })}
          ></textarea>
          {errors.username && (
            <p className="text-red-500 text-xs italic">
              Please choose a username.
            </p>
          )}
        </div>
        <div className="w-full  flex items-start md:w-full px-3">
          <input
            type="submit"
            className="bg-white duration-100 text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-blue-600 hover:text-white"
            value="Post Comment"
          />
        </div>
      </form>
    </div>
  );
}

export default WriteComment;
