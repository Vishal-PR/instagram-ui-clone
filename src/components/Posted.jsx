import React from "react";
import LikeAndComments from "./LikeAndComments";

import Post from "./Post";
import PostHeader from "./PostHeader";

function Posted({ post }) {
  return (
    <div className="flex flex-col items-start justify-start overflow-auto scrollbar-hide">
      
      <PostHeader post={post} />
      <Post post={post} />
      <LikeAndComments post={post} />
    </div>
  );
}

export default Posted;
