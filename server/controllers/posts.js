import PostMessage from "../models/posts.js";

const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export { getPosts, createPost };
