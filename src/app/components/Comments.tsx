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
    <div className="">
      <div
        className="flex items-center justify-center bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900"
        key={user.id}
      >
        <div className="">
          <div className="bg-gray-100  rounded px-2 pb-2">
            <div className="font-medium">
              <a href="#" className="hover:underline text-sm">
                <small>Hasan Muhammad</small>
              </a>
            </div>
            <div className="">{user.content}</div>
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
                <small>{user.createdOn}</small>
              </a>
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
