import React from "react";
import Link from "next/link";

const Post = ({ user }: { user: any }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://localhost:7197/api/Post/DeletePost`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({ postId: user.id }),
      });

        console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center my-2 rounded-lg">
      <div
        key={user.id}
        className="px-5 py-4 bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 shadow rounded-lg max-w-2xl min-w-full "
      >
        <div className="flex mb-4">
          <Link href={`/Profile/${user.userName}`}>
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </Link>

          <div className="ml-2 mt-0.5">
            <span className="block font-medium text-base leading-snug text-white dark:text-gray-100">
              content {user.userName}
            </span>
            <span className="block text-sm text-white font-light leading-snug">
              {user.createdAt}
            </span>
          </div>
        </div>

        <Link href={`/Post/${user.id}`}>
          <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
            {user.content}
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="flex ">
              <span className="ml-1 text-white  font-light">Likes 8</span>
            </div>
          </div>
        </Link>
        <div className="ml-1 text-white font-light">
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
          <Link className="py-2 px-4" href={""}>
            33 comments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
