import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const YouCanFollow = () => {
  const [users, setUsers] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://localhost:7197/api/User/GetWhoToFollowQuery",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        }
      );

      const users = await response.json();
      setUsers(users);
      console.log(users);
    };
    fetchUsers();
  }, []);

  const CreateFollow = async (username: any) => {
    try {
      const response = await fetch(`https://localhost:7197/api/Follow`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({
          followTo: username,
          userName: session?.user?.userName,
        }),
      });

      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const DeleteFollow = async (username: any) => {
    try {
      const response = await fetch(`https://localhost:7197/api/Follow`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify({
          followTo: username,
          userName: session?.user?.userName,
        }),
      });

      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 ">
      <ul>
        {users.map((user: any, i) => (
          <div key={i}>
            <li>
              <div className="flex ">
                <div className="flex-1 ">
                  <Link href={`/Profile/${user.userName}`}>
                    <div className="flex items-center w-48">
                      <div>
                        <img
                          className=" max-h-12 max-w-12 rounded-full"
                          src={user?.profileImage}
                          alt={user?.userName}
                        />
                      </div>
                      <div className=" ml-1 mt-3">
                        <p className="text-base leading-6 font-medium text-white">
                          {user.name}
                        </p>
                        <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                          @ShonaDesign
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex-1  py-1 m-1">
                  {user?.isFollow ? (
                    <button
                      onClick={CreateFollow}
                      className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full"
                    >
                      +
                    </button>
                  ) : (
                    <button
                      onClick={DeleteFollow}
                      className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full"
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default YouCanFollow;
