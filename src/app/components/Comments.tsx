import React from "react";

const Comments = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="block">
        <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
          <div className="font-medium">
            <a href="#" className="hover:underline text-sm">
              <small>Nirmala</small>
            </a>
          </div>
          <div className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            maiores!
          </div>
        </div>
        <div className="flex justify-start items-center text-xs w-full">
          <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
            <a href="#" className="hover:underline">
              <small>Like</small>
            </a>
            <small className="self-center">.</small>
            <a href="#" className="hover:underline">
              <small>Reply</small>
            </a>
            <small className="self-center">.</small>
            <a href="#" className="hover:underline">
              <small>15 hour</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
