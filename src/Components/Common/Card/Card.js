import React from "react";

import "./Card.css";

function Card(props) {
  console.log(props, "props");
  return (
    <div className="post-card">
      <div className="post__header">
        <div className="post__user">
          <img src={props.avatar} className="post__avatar" />
          <div className="post__username">
            {`${props.first_name} ${props.last_name}`}
            <div className="post__email"> {props.email}</div>
          </div>
        </div>
      </div>
      <div className="post__content">
        {props?.post?.type.toLowerCase() === "image" && (
          <img src={props?.post?.post_url} className="content__image" />
        )}
      </div>
    </div>
  );
}

export default Card;
