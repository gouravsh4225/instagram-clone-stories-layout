import React from "react";

import "./Card.css";

function Card({ avatar, first_name, last_name, email, post }) {
  return (
    <div className="post-card">
      <div className="post__header">
        <div className="post__user">
          <img src={avatar} className="post__avatar" alt={`${first_name}`} />
          <div className="post__username">
            {`${first_name} ${last_name}`}
            <div className="post__email"> {email}</div>
          </div>
        </div>
      </div>
      <div className="post__content">
        {post?.type.toLowerCase() === "image" && (
          <img
            src={post?.post_url}
            className="content__image"
            alt={`${first_name}`}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
