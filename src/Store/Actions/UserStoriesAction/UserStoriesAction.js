import * as types from "../../Types/Types";
import axios from "axios";

export const getUserStories = () => (dispatch) => {
  axios
    .get(`https://randomuser.me/api/?results=20`)
    .then((res) => {
      const { results } = res.data;
      dispatch({
        type: types.FETCH_ALL_USER_STORIES,
        payload: results,
      });
    })
    .catch((error) => {});
};

export const clearUserStories = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_ALL_USER_STORIES,
    payload: "",
  });
};
