import { combineReducers } from "redux";
import UserStoriesReducer from "./UserStoriesReducer/UserStoriesReducer";

export default combineReducers({
  UserStories: UserStoriesReducer,
});
