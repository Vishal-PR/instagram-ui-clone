import React from 'react';
// import profile from '../assets/vishal.JPG'
import {BsThreeDotsVertical} from 'react-icons/bs'

function PostHeader({post:{src,username}}) {
  return (
    <div className='w-full h-fit'>
        <hr className='my-2'/>
        <div className='flex flex-row w-3/4 items-start'>
        <div
          className="my-4 mx-4 cursor-pointer hover:scale-14 duration-300 shrink-0 rounded-full  
            border-2 border-transparent bg-clip-border bg-gradient-to-tr from-fuchsia-700 via-red-400 to to-yellow-600"
        >
          <img
            // src={profile}
            src={src}
            alt=""
            className="w-12 h-12 rounded-full border-2 border-white border-solid"
          />
        </div>   
        <p className='my-7 text-xl font-bold'>{username}</p>
        </div>
        <div className='flex place-items-center justify-end -mt-14'>
            <BsThreeDotsVertical size={30} className='text-2xl'/>
        </div>
    </div>
  )
}

export default PostHeader