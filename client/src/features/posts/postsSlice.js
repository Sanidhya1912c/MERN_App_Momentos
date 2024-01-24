import { createSlice } from "@reduxjs/toolkit";
import { createPosts } from "../../actions/posts";
import * as api from "../../api/index";

const getPost = async () => {
  try {
    const { data } = await api.fetchPosts();

    // console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const initialState = {
  posts: getPost(),
};

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: createPosts,
    getPosts: getPost,
  },
});

export const { createPost, getPosts } = posts.actions;

export default posts.reducer;
