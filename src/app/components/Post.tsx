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
        className="px-5 py-4 bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 shadow rounded-lg  "
      >
        <div className="flex mb-4">
          <Link href={`/Profile/${user?.userName}`}>
            <div className="flex-auto">
              <Avatar
                label="V"
                className="mr-2"
                size="large"
                style={{ backgroundImage: `${user?.profileImage}` }}
                shape="circle"
              />
            </div>
          </Link>

          <div className="ml-2 mt-0.5">
            <span className="block font-medium text-base leading-snug text-white dark:text-gray-100">
              {user?.userName}
            </span>
            <span className="block text-sm text-white font-light leading-snug">
              {user?.createdOn}
            </span>
          </div>
        </div>

        <Link href={`/Post/${user?.id}`}>
          <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
            {user?.content}
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="flex ">
              <span className="ml-1 text-white  font-light"> </span>
            </div>
          </div>
        </Link>
        <div className="ml-1 text-white font-light">
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

          <p>
            {user?.likeCount} Is Liked:
            {user?.isLiked ? (
              <button
                onClick={DeleteLike}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Delete Like
              </button>
            ) : (
              <button
                onClick={CreateLike}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Create Like
              </button>
            )}
          </p>

          <Link className="py-2 px-4" href={""}>
            33 comments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
