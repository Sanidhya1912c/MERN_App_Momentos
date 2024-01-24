import { createSlice } from "@reduxjs/toolkit";
import { createPosts, deletePosts } from "../../actions/posts";
import * as api from "../../api/index";

const getPost = async () => {
  try {
    const { data } = await api.fetchPosts();

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
    deletePost: deletePosts,
  },
});

export const { createPost, getPosts, deletePost } = posts.actions;

export default posts.reducer;
