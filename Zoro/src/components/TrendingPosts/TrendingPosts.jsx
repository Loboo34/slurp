import React from "react";
import Post from "./Post";

const TrendingPosts = () => {
  return (
    <div className=" w-full mr-3">
      <h1 className="md:text-[18px] text-[14px] text-[#cae962] font-semibold pb-6">
        Trending Posts
      </h1>
      <div className="">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default TrendingPosts;
