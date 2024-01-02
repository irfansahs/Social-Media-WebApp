import React, { useEffect,useState } from "react";
import Link from "next/link";

const TrendingPosts = () => {
  const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch(
          "https://localhost:7197/api/Post/GetTrends",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        const users = await response.json();
        setUsers(users);
        console.log(users);
      };
      fetchUsers();
    }, []);



 

  return (
    <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg  bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 ">
      <div className="flex">
        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
            World trends
          </h2>
        </div>
      </div>

      {users.map((tab: any, i) => (
        <Link key={i} href={`/Search/${tab.name}`}>
          <div className="flex">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 w-48 text-xs text-white">{i+1} . Trending</p>
                            <h2 className="px-4 ml-2 w-48 font-bold text-white">{tab.name}</h2>
                            <p className="px-4 ml-2 mb-3 w-48 text-xs text-white">{tab.count} Posts</p>
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a href="" className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right">
                                <svg className="m-2 h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
                            </a>
                        </div>
                    </div>
        </Link>
      ))}
    </div>
  );
};

export default TrendingPosts;
