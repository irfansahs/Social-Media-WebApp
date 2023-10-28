import React from "react";
import Link from "next/link";
import TrendingPosts from "./TrendingPosts";
import YouCanFollow from "./YouCanFollow";
import Searchbar from "../components/Searchbar";

const RightsideBar = () => {
  return (
    <aside className="grid gap-4 top-0 right-0 z-40 w-76  ">
      <Searchbar />
      <TrendingPosts />

      <YouCanFollow />
    </aside>
  );
};

export default RightsideBar;
