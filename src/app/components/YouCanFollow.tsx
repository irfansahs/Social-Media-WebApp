import React from "react";
import Link from "next/link";

const YouCanFollow = () => {
  const tabs = [
    {
      name: "Login",
      url: "/",
    },
    {
      name: "Register",
      url: "/Register",
    },
    {
      name: "Home",
      url: "/Home",
    },
  ];
  return (
    <div className="rounded-lg bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 ">
      <ul>
        {tabs.map((tab, i) => (
          <Link key={i} href={`/Profile/${tab.url}`}>
            <li>
              <div className="flex ">
                <div className="flex-1 ">
                  <div className="flex items-center w-48">
                    <div>
                      <img
                        className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                        src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                        alt=""
                      />
                    </div>
                    <div className=" ml-1 mt-3">
                      <p className="text-base leading-6 font-medium text-white">
                        {tab.name}
                      </p>
                      <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @ShonaDesign
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1  py-1 m-1">
                  <a href="" className=" float-right">
                    <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                      Follow
                    </button>
                  </a>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default YouCanFollow;
