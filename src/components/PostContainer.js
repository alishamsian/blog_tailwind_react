import React from "react";
import PostCard from "./PostCard";
import LeadCard from "./LeadCard";
import BannerTop from "./BannerTop";

const PostContainer = () => {
  return (
    <>
      <BannerTop />

      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <LeadCard />
          <div className="flex flex-wrap justify-between pt-12 -mx-6 ">
            <PostCard col="1/3" height_img="64" ali />
            <PostCard col="1/3" height_img="64" />
            <PostCard col="1/3" height_img="64" />
            <PostCard col="1/3" height_img="full" />
            <PostCard col="1/3" height_img="full" />
            <PostCard col="2/3" height_img="full" />
            <PostCard col="1/3" height_img="64" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContainer;
