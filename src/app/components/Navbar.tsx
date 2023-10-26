import React from "react";
import Link from "next/link";

const Navbar = () => {

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
