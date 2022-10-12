import {ADD_POSTS, ERROR, LOADING} from "./postsReducer";

export const loadingPosts = () => ({
  type: LOADING,
});

export const errorPosts = (error) => ({
  type: ERROR,
  payload: error,
});
export const addPosts = (data) => ({
  type: ADD_POSTS,
  payload: data,
});