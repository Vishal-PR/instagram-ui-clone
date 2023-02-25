import React from 'react';
import profile from "../assets/vishal.JPG";
import { AiFillPlusCircle } from "react-icons/ai";


function YourStory() {
  return (
    <div className="relative my-5 mx-3 cursor-pointer hover:scale-14 duration-300 shrink-0 flex flex-col items-start justify-center">
        <div className="absolute left-11 top-11 rounded-full">
          <span className="text-lg font-light text-blue-400">
            <AiFillPlusCircle
              size={25}
              className="border-2 border-solid border-white rounded-full"
            />
          </span>
        </div>
        <img src={profile} 
             alt="" 
             className="w-16 h-16 rounded-full" />
        <p className="text-md font-normal mt-2">Your story</p>
      </div>

  )
}

export default YourStory
