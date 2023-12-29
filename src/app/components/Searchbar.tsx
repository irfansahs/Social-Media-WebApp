import Link from "next/link";
import React from "react";
import { useState } from "react";

function Searchbar() {
  const [search, setSearch] = useState("");

  return (
    <form>
      <div
        className="flex items-center max-w-md mx-auto bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 bg-white rounded-lg "
        x-data="{ search: '' }"
      >
        <div className="w-full">
          <input
            type="search"
            className="w-full px-4 py-1 text-gray-800 bg-gradient-to-br from-gray-400 via-sky-700 to-blue-900 rounded-full focus:outline-none"
            placeholder="search"
            x-model="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <Link
          href={`/Search/${search}`}
            type="submit"
            className="flex items-center bg-transparent justify-center w-12 h-12 text-white rounded-r-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Searchbar;
