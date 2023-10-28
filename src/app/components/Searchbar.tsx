import React from "react";

function Searchbar() {
  return (
    <form >
      <div className="flex justify-center">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="h-16 px-10 pr-10 text-2xl  w-full rounded-lg   dark:bg-gray-800 text-white  "
        />
      </div>
    </form>
  );
}

export default Searchbar;
