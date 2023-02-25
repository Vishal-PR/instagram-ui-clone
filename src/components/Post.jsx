import React from 'react';

function Post({post:{src}}) {
  return (
    <div className='mt-6 '>
        <img 
        src={src} 
        alt="" 
        className='w-100 h-100 w-screen '/>
    </div>
  )
}

export default Post