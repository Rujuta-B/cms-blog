import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div>
      <div>
        <img src={post.featuredImage.url} alt={post.title} />
      </div>
    </div>
  );
};

export default PostCard;
