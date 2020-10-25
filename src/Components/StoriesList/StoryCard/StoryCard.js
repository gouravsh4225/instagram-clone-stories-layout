import React from "react";

import "./StoryCard.css";

function StoryCard({ picture, name, id, open, index }) {
  return (
    <div className="story-container">
      <div className="story-card" onClick={(e) => open(index)}>
        <img src={picture.medium} alt="" className="story-image" />
      </div>
      <div className="story__username">{`${name?.first} ${name?.last}`}</div>
    </div>
  );
}

export default StoryCard;
