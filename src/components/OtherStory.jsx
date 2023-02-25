import React from 'react';
// import profile from "../assets/vishal.JPG";

function OtherStory({post:{id,src,username}}) {
  return (
    <div key={id} className="flex flex-col items-center justify-center shrink-0">
        <div
          className="my-4 mx-4 cursor-pointer hover:scale-14 duration-300 shrink-0 rounded-full  
            border-2 border-transparent bg-clip-border bg-gradient-to-tr from-fuchsia-700 via-red-400 to to-yellow-600"
        >
          <img
            src={src}
            alt=""
            className="w-16 h-16 rounded-full border-2 border-white border-solid"
          />
        </div>
        <p className="text-md font-normal -mt-2">{username}</p>
      </div>
  )
}

export default OtherStory