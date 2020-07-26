import jsonPlaceholder from "../apis/jsonPlaceholder";

/*
 Action Creator MUST return an Action object, with 'type' (and optional 'payload')
 since fetch is async, use middleware
 middleware receives objects (i.e. no change) OR functions
 functions are (invoked with dispatch (and getState), which can be called once the promise resolves)
*/
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// return {
//   type: "FETCH_POSTS",
//   payload: response
// };
