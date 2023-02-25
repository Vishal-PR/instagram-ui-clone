import React from "react";
import { HiHome } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { BsPlusSquare } from 'react-icons/bs'
import { BiMoviePlay } from "react-icons/bi";
import ProfileIcon from "./ProfileIcon"

function BottomRow() {
  return (
    <div className="flex flex-row items-center justify-around bg-white fixed w-full h-12  bottom-0 text-black">
       <div className="mx-4">
        <HiHome size={30} className="cursor-pointer hover:scale-110"/>
      </div>
      <div className="mx-4">
        <CiSearch size={30} className="cursor-pointer hover:scale-110"/>
      </div>
      <div className="mx-4">
        <BsPlusSquare size={30} className="cursor-pointer hover:scale-110"/>
      </div>
      <div className="mx-4 ">
        <BiMoviePlay size={30} className="cursor-pointer hover:scale-110"/>
      </div> 
      <div className="mr-4 cursor-pointer hover:scale-110">
        <ProfileIcon/>
      </div>
    </div>
  );
}

export default BottomRow;
