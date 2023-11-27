"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

import { Options } from "next/dist/server/base-server";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession({
    required: false,
    onUnauthenticated() {
      redirect("/");
    },
  });
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
        <ul>
          {session ? (
            <div className="flex flex-col gap-4 ml-auto">
              <button onClick={() => signOut()} className="text-red-600">
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              type="submit"
              className="text-green-600 ml-auto"
            >
              Sign In
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
