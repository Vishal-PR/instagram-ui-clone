import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";

function TopRow() {
  return (
    <div className="mx-auto  lg:w-full  h-fit flex flex-row items-center justify-between bg-white shadow-sm shadow-gray-600">
      <div className="capitalize px-4 my-1">
        <p className="font-signature py-2 text-transparent text-5xl cursor-pointer bg-clip-text bg-gradient-to-tr from-fuchsia-700 via-red-400 to to-yellow-600">
          Instagram
        </p>
      </div>

      <div className="absolute right-1 flex flex-row items-center justify-around">
        <div className="text-black">
          <div className="absolute right-16 -top-1 bg-red-500 rounded-full cursor-pointer">
            <span className="text-sm text-white p-1">13</span>
          </div>
          <AiOutlineHeart size={35} className="mx-3 cursor-pointer" />
        </div>

        <div className="text-blue-900">
          <div className="absolute right-3 -top-1  bg-red-500 rounded-full cursor-pointer">
            <span className="text-sm text-white p-1">13</span>
          </div>
          <RiMessengerLine size={35} className="mx-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default TopRow;
