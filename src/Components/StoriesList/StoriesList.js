import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getUserStories,
  clearUserStories,
} from "../../Store/Actions/UserStoriesAction/UserStoriesAction";

import StoryCard from "./StoryCard/StoryCard";
import StoryViewModal from "./StoryViewModal/StoryViewModal";

import { storyModalViewData } from "../../StaticData/Data";
import "./StoriesList.css";

class StoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      showStoryModal: false,
      storyViewData: [],
    };
  }

  componentDidMount() {
    this.props.getUserStories();
  }

  componentDidUpdate() {
    if (this.props.userStoriesResponse) {
      this.setState({ stories: this.props.userStoriesResponse });
      this.props.clearUserStories();
    }
  }

  openStories = (id) => {
    this.setState({
      showStoryModal: true,
      storyViewData: storyModalViewData(),
    });
  };

  hideShowStoryModal = () => {
    this.setState({
      showStoryModal: false,
      storyViewData: [],
    });
  };

  render() {
    const { showStoryModal, storyViewData, stories } = { ...this.state };
    return (
      <React.Fragment>
        {showStoryModal ? (
          <StoryViewModal
            open={showStoryModal}
            storyViewData={storyViewData}
            close={(e) => this.hideShowStoryModal()}
          />
        ) : null}
        <div className="stories-container pt-1">
          <div className="stories-cards">
            <div className="stories-heading">
              <div className="stories-title">Stories</div>
              <div className="stories-all" onClick={this.openStories}>
                See All Stories
              </div>
            </div>
            <div className="stories-lists">
              {stories.map((item, index) => (
                <StoryCard
                  {...item}
                  index={index}
                  key={index}
                  open={(id) => this.openStories(id)}
                />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  userStoriesResponse: state.UserStories.userStoriesReponse,
});
const mapdispatchtoprops = {
  getUserStories,
  clearUserStories,
};

export default connect(mapStateToProps, mapdispatchtoprops)(StoriesList);
