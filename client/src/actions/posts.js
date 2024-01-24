import * as api from "../api";

//Actions creators
export const createPosts = async (state, action) => {
  try {
    const { data } = await api.createPosts(action.payload);

    state.posts.push(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const likePosts = async (state, action) => {
  try {
    api.likePost(action.payload);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePosts = async (state, action) => {
  try {
    // api.deletePost(action.payload);
    console.log(action.payload);
    
  } catch (error) {
    console.log(error.message);
  }
};
