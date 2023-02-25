import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsFillHeartFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark,FaBookmark } from "react-icons/fa";

function LikeAndComments({ post: { username, caption } }) {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <div className="w-full h-fit my-5">
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-row items-start justify-start">

  {/* if like press then it chnages to red condition */}
          {!like ? (
            <AiOutlineHeart
              size={32}
              className="mt-2 ml-2 mr-1 cursor-pointer"
              onClick={() => setLike(!like)}
            />
          ) : (
            <BsFillHeartFill
              size={32}
              color={"red"}
              className="mt-2 ml-2 mr-1 cursor-pointer"
              onClick={() => setLike(!like)}
            />
          )}
          
          
          <BsChat
            size={28}
            className="mt-2 mx-2 transform -scale-x-100 cursor-pointer"
          />
          <FiSend size={28} className="mt-3 mx-2 cursor-pointer" />
        </div>
        <div className="flex justify-end">
          {/* <FaRegBookmark size={28} className="mt-2 mr-2 cursor-pointer" /> */}
          {!save ?
            ( <FaRegBookmark size={28} className="mt-2 mr-2 cursor-pointer" onClick={()=>setSave(!save)}/>) 
            :
            ( <FaBookmark size={28} className="mt-2 mr-2 cursor-pointer" onClick={()=>setSave(!save)}/>)

          }
        </div>
      </div>

      <div className="mt-2 flex flex-row items-start justify-start">
        <p className="text-1xl mx-3 font-bold">{username}</p>
        <span className="mt-1 text-sm font-normal">{caption}</span>
      </div>
    </div>
  );
}

export default LikeAndComments;
