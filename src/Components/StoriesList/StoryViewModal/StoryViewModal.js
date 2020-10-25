import React, { useEffect, useState } from "react";
import "./StoryViewModal.css";

function StoryViewModal({ close, storyViewData: { stories } }) {
  console.log("storyViewData", stories);
  const [currentViewing, setCurrentViewing] = useState({});
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  useEffect(() => {
    setCurrentViewing(stories[0]);
    setCurrentViewIndex(0);
  }, [stories]);

  function onClickPrevious() {
    if (currentViewIndex > 0) {
      setCurrentViewing(stories[currentViewIndex - 1]);
      setCurrentViewIndex(currentViewIndex - 1);
    }
  }

  function onClickNext() {
    if (currentViewIndex < stories.length) {
      setCurrentViewing(stories[currentViewIndex + 1]);
      setCurrentViewIndex(currentViewIndex + 1);
    }
  }

  return (
    <div className="modal">
      <div className="modal_action">
        <div
          className="navigation-close"
          onClick={(e) => close()}
          title="close"
        >
          <span>X</span>
        </div>
        {currentViewIndex > 0 ? (
          <div
            className="navigation-wrapper navigation--previous"
            title="previous"
            onClick={(e) => onClickPrevious()}
          >
            <span className="action-icon"> &#8249; </span>
          </div>
        ) : null}
        <div className="modal-wrapper">
          {currentViewing?.type?.toLowerCase() !== "video" ? (
            <img
              src={currentViewing?.story_url?.url}
              className="stories_image"
            />
          ) : (
            <video
              className="stories_image"
              src={currentViewing?.story_url?.url}
              controls
              autoPlay={true}
            />
          )}
        </div>
        {currentViewIndex + 1 < stories.length ? (
          <div
            className="navigation-wrapper navigation--next"
            title="next"
            onClick={(e) => onClickNext()}
          >
            <span className="action-icon"> &#8250; </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default StoryViewModal;
