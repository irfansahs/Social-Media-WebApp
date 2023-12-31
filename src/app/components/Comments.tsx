import React from "react";
import Link from "next/link";
const Comments = ({ user }: { user: any }) => {
  
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://localhost:7197/api/Comments`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({ commentId: user.id }),
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
      className="px-5 py-4 bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 shadow rounded-lg w-11/12"
    >
      <div className="flex mb-4">
        <Link href={`/Profile/${user?.userName}`}>
          <div className="flex-auto">
            <img
              className=" max-h-12 max-w-12 rounded-full"
              src={user?.profileImage}
              alt={user?.userName}
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
        <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal hashTag">
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
            
          </div>
        </div>

        <div className="flex justify-between">
          <div>{user?.commentsCount} Comments</div>

          <div>
            {user?.likeCount}

            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Comments;
