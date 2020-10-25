import React, { useState, useEffect } from "react";

import axios from "axios";

import StoryCard from "./StoryCard/StoryCard";
import StoryViewModal from "./StoryViewModal/StoryViewModal";

import { storyModalViewData } from "../../StaticData/Data";
import "./StoriesList.css";

function StoriesList() {
  const [stories, setStories] = useState([]);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [storyViewData, setstoryViewData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=20`)
      .then((res) => {
        const { results } = res.data;
        setStories(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function openStories(id) {
    setstoryViewData(storyModalViewData());
    setShowStoryModal(true);
  }

  function hideShowStoryModal() {
    setstoryViewData([]);
    setShowStoryModal(false);
  }

  return (
    <React.Fragment>
      {showStoryModal ? (
        <StoryViewModal
          open={showStoryModal}
          storyViewData={storyViewData}
          close={(e) => hideShowStoryModal()}
        />
      ) : null}
      <div className="stories-container pt-1">
        <div className="stories-cards">
          <div className="stories-heading">
            <div className="stories-title">Stories</div>
            <div className="stories-all">See All Stories</div>
          </div>
          <div className="stories-lists">
            {stories.map((item, index) => (
              <StoryCard
                {...item}
                index={index}
                key={index}
                open={(id) => openStories(id)}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default StoriesList;
