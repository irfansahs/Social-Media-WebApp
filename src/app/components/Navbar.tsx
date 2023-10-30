"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
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
    {
      name: "Messenger",
      url: "/Messenger",
    },
    {
      name: "CreateUser",
      url: "/createuser",
    },
    {
      name: "Trends",
      url: "/Trends",
    },
  ];

  return (
    <nav className="flex items-center justify-between bg-white shadow-md">
      <div className="mx-auto bg-cyan-700 w-full  max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 ">
        <ul className=" flex justify-center  items-center gap-x-6 text-white max-md:flex-col ">
          {tabs.map((tab, i) => (
            <Link key={i} href={`${tab.url}`}>
              {tab.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
