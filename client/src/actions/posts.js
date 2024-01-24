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
