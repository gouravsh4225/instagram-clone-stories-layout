import * as types from "../../Types/Types";

const initialState = {
  userStoriesReponse: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_USER_STORIES:
      return {
        ...state,
        userStoriesReponse: action.payload,
      };
    case types.CLEAR_ALL_USER_STORIES:
      return initialState;
    default:
      return state;
  }
}
