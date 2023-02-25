import React from "react";
import YourStory from "./YourStory";
import OtherStory from "./OtherStory";

//note
//gradient for border then we need to do following steps
// 1.make border as traparent
// 2.make bg-clip-border
// 3.give gradient from t/te/b/..
// 4. from and to

function Stories({posts}) {
  return (
    <div className="flex flex-row items-start justify-start overflow-auto scrollbar-hide shrink-0 ">

        <YourStory/>
        {
          posts.slice(1,6).map((post)=>(
            // posts.map((post)=>(
              
                <OtherStory key={post.id} post={post}/>
              
          ))
            
        }
        
    </div>
  );
}

export default Stories;
