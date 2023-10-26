import React from "react";
import Link from "next/link";
import Comments from "./Comments";

const NewPost = (props: any) => {
  return (
    <div className="flex justify-center my-2">
      <div
        key={props}
        className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-2xl"
      >
        <div className="flex mb-4">
          <Link href={`/Profile/${props.name}`}>
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </Link>

          <div className="ml-2 mt-0.5">
            <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
              {" "}
              content {props.content}
            </span>
            <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
              16 December at 08:25
            </span>
          </div>
        </div>

        <Link href={`/Post/${props.postId}`}>
          <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="flex ">
              <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">
                Likes 8
              </span>
            </div>
            <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
              <Link href={""}>33 comments</Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewPost;
