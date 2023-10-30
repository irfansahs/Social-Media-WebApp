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
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          Notifications
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
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
          Bookmarks
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

          <div className="relative hover-trigger">
            More
            <div className="absolute bg-white border border-grey-100 p-6 hover-target">
              <SignInButton/>
            </div>
          </div>
        </a>
      </nav>
    </aside>
  );
};

export default Leftsidebar;