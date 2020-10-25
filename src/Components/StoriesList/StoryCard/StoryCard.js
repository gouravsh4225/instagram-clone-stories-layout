import React from "react";

import "./StoryCard.css";

function StoryCard({ avatar, first_name, last_name, open, id }) {
  return (
    <div className="story-container">
      <div className="story-card" onClick={(e) => open(id)}>
        <img src={avatar} alt="" className="story-image" />
      </div>
      <div className="story__username">{`${first_name} ${last_name}`}</div>
    </div>
  );
}

export default StoryCard;
