import React, { useState } from "react";
import Card from "../Common/Card/Card";

import { getPosts } from "../../StaticData/Data";

import "./Post.css";

function Post() {
  const [posts] = useState(getPosts());

  return (
    <div className="posts-container mt-10">
      {posts.map((item, i) => (
        <Card {...item} key={i} />
      ))}
    </div>
  );
}

export default Post;
