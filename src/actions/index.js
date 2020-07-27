import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

/*
 Action Creator MUST return an Action object, with 'type' (and optional 'payload')
 since fetch is async, use middleware
 middleware receives objects (i.e. no change) OR functions
 functions are (invoked with dispatch (and getState), which can be called once the promise resolves)
*/

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // fetchPosts() will be invoked by middleware
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// return {
//   type: "FETCH_POSTS",
//   payload: response
// };
