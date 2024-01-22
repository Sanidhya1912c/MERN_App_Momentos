import React from "react";
import useStyles from "./styles.js";
import Post from "./Post/Post.jsx";

const Posts = () => {
  const classes = useStyles();
  return (
    <div>
      <Post />
    </div>
  );
};

export default Posts;
