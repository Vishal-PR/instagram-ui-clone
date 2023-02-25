import React from 'react';
import profile from '../assets/vishal.JPG'

function profileIcon() {

  
  return (
    <div>
    <div className="flex flex-col items-center justify-center shrink-0">
    <div
      className="my-4 mx-4 cursor-pointer hover:scale-14 duration-300 shrink-0 rounded-full">
      <img
        src={profile}
        alt=""
        className="w-6 h-6 rounded-full"
      />
    </div>
    
  </div>
</div>
  )
}

export default profileIcon