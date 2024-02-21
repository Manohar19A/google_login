import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import like from "./like.png";

const Sections = () => {
  const [posts, setPosts] = useState([]);
  const postref = useRef(5);
  const fetchData = async () => {
    const res = await fetch("https://dummyapi.io/data/v1/post?limit=60", {
      headers: {
        "app-id": "65c49d3e7bb37b1b3732616e",
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data);
    setPosts(data?.data);
  };
  const handleScroll = () => {
    postref.current += 3;
  };
  useEffect(() => {
    fetchData();
  }, [postref.current]);
  return (
    <div>{
      posts.length === 0 ? (   <div className="p-4 m-4" onScroll={handleScroll()}>
      
       {
        Array(5).fill("").map((e,index)=>( <div className="w-2/5 h-96 bg-slate-200 border-spacing-1 mt-3">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-slate-300"></div>
          <div className="font-medium">
            {/* {post?.owner.firstName} {post?.owner.lastName} */}
          </div>
        </div>
        <div>
          {" "}
          {/* <img src={post?.image} alt="images" /> */}
          <div>
            <div className="flex gap-1">
              {/* <img src={like} alt="images" className="w-6 h-6 mt-2" /> */}
              {/* <p className="mt-2 text-sky-600">{post?.likes}</p> */}
            </div>
            <div className="float-right">
              {" "}
              {/* <p>{moment(post?.publishDate).format("lll")}</p> */}
            </div>
          </div>
          {/* <p className="font-light text-wrap">{post?.text}</p> */}
          {/* <p className="text-wrap text-cyan-800">{post?.tags.join("#")}</p> */}
        </div>
      </div>))
       }
    
    </div>):( <div className="p-4 m-4" onScroll={handleScroll()}>
      {posts.map((post) => (
        <div className="w-2/5 h-auto bg-slate-100 border-spacing-1 mt-3">
          <div className="flex items-center gap-3">
            <img
              src={post?.owner?.picture}
              alt="images"
              className="w-14 h-14 rounded-full"
            />
            <p className="font-medium">
              {post?.owner.firstName} {post?.owner.lastName}
            </p>
          </div>
          <div>
            {" "}
            <img src={post?.image} alt="images" />
            <div>
              <div className="flex gap-1">
                <img src={like} alt="images" className="w-6 h-6 mt-2" />
                <p className="mt-2 text-sky-600">{post?.likes}</p>
              </div>
              <div className="float-right">
                {" "}
                <small>{moment(post?.publishDate).format("lll")}</small>
              </div>
            </div>
            <p className="font-light text-wrap">{post?.text}</p>
            <p className="text-wrap text-cyan-800">{post?.tags.join("#")}</p>
          </div>
        </div>
      ))}
    </div>)
      }</div>
 
   
  );
};

export default Sections;
