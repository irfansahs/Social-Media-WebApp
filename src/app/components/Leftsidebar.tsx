import React from "react";
import Link from "next/link";
import SignInButton from "./SignInButton";

const Leftsidebar = () => {
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
    <aside className="left-0 z-40 w-76 rounded-lg  mx-auto shadow-lg  dark:bg-gray-800 bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 ">
      <nav className="p-2">
        <a
          href="/Home"
          className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full text-white  hover:text-blue-300 duration-100 hover:bg-opacity-70"
        >
          <svg
            className="mr-4 h-6 w-6 "
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
            ></path>
          </svg>
          Home
        </a>
        <a
          href="#"
          className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full text-white hover:text-blue-300 duration-100 hover:bg-opacity-70"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
          </svg>
          Explore
        </a>

        <a
          href="/Messenger"
          className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full text-white hover:text-blue-300 duration-100 hover:bg-opacity-70"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Messages
        </a>

        <a
          href="#"
          className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full text-white hover:text-blue-300 duration-100 hover:bg-opacity-70"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Profile
        </a>
        <a
          href="#"
          className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full text-white hover:text-blue-300 duration-100 hover:bg-opacity-70"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>

          <div className=" flex  relative hover-trigger">
            More
            <div className=" bg-white border border-grey-100 p-6 hover-target">
              <SignInButton />
            </div>
            <div className=" bg-white border border-grey-100 p-6 hover-target">
              <Link href={"/EditProfile"}>Edit Profile</Link>
            </div>
          </div>
        </a>
      </nav>
    </aside>
  );
};

export default Leftsidebar;
