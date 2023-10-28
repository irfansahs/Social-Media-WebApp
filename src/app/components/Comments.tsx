import React from "react";
import Link from "next/link";
import WriteComment from "./WriteComment";
const Comments = (props: any) => {
  return (
    <div className="">
      <WriteComment />

      <div className="flex items-center justify-center bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900">
        <div className="">
          <div className="bg-gray-100  rounded px-2 pb-2">
            <div className="font-medium">
              <a href="#" className="hover:underline text-sm">
                <small>Hasan Muhammad</small>
              </a>
            </div>
            <div className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Expedita, maiores!
            </div>
          </div>
          <div className="flex justify-start items-center  w-full">
            <div className="font-semibold text-gray-700 px-2 flex items-center justify-center ">
              <a href="#" className="hover:underline">
                <small>Like</small>
              </a>
              <small className="self-center">.</small>
              <a href="#" className="hover:underline">
                <small>Reply</small>
              </a>
              <small className="self-center">.</small>
              <a href="#" className="hover:underline">
                <small>15 hour</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
