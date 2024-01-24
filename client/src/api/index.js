import axios from "axios";

const url = "http://localhost:3000/posts";

export const fetchPosts = () => axios.get(url);

export const createPosts = (post) => {
  axios.post(url, post);
};

export const deletePost = (id) => axios.post(url, id);

export const likePost = (id) => axios.post(url, id);