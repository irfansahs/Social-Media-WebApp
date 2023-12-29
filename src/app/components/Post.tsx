import React from "react";
import Link from "next/link";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { signIn, signOut, useSession } from "next-auth/react";
import { Provider, LikeButton } from "@lyket/react";

const Post = ({ user }: { user: any }) => {
  const { data: session } = useSession();
  console.log("irfan data", session?.user?.accessToken);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://localhost:7197/api/Post/DeletePost`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if needed
          },
          body: JSON.stringify({ postId: user.id }),
        }
      );

      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const CreateLike = async () => {
    try {
      const response = await fetch(`https://localhost:7197/api/Lİke`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({ postId: user.id, userName: "Ahmet" }),
      });

      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const DeleteLike = async () => {
    try {
      const response = await fetch(`https://localhost:7197/api/Lİke`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({ postId: user.id, userName: "Ahmet" }),
      });

      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center my-2 rounded-lg">
      <div
        key={user?.id}
        className="px-5 py-4  shadow rounded-lg w-11/12"
        style={{ backgroundColor: ` ${user?.userColor}` }}
      >
        <div className="flex justify-between mb-4">
          <Link href={`/Profile/${user?.userName}`}>
            <div className="flex flex-row">
              <div className="flex-auto">
                <img
                  className=" max-h-12 max-w-12 rounded-full"
                  src={user?.profileImage}
                  alt={user?.userName}
                />
              </div>

              <div className="ml-2 mt-0.5">
                <span className="block font-medium text-base leading-snug text-white dark:text-gray-100">
                  {user?.userName}
                </span>
                <span className="block text-sm text-white font-light leading-snug">
                  {user?.createdOn}
                </span>
              </div>
            </div>
          </Link>

          <div className="relative hover-trigger">
            More
            <div className="absolute bg-white border border-grey-100 p-6 hover-target">
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        <Link href={`/Post/${user?.id}`}>
          <p className="  leading-snug md:leading-normal ">{user?.content}</p>
          <div className="flex justify-between items-center mt-5">
            <div className="flex ">
              <span className="ml-1 text-white  font-light"> </span>
            </div>
          </div>
        </Link>
        <div className="ml-1 text-white font-light">
          <div className="flex justify-between">
            <div>{user?.commentsCount} Comments</div>

            <div className="flex flex-row">
              <p className="p-2 flex justify-center">{user?.likeCount}</p>
              {user?.isLiked ? (
                <button
                  onClick={DeleteLike}
                  type="button"
                  className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-red dark:focus:ring-red-800 dark:hover:bg-red-500"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              ) : (
                <button
                  onClick={CreateLike}
                  type="button"
                  className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
