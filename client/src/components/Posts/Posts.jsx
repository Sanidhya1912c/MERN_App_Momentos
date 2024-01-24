import React, { useEffect, useState } from "react";
import useStyles from "./styles.js";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post.jsx";

const Posts = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useSelector((state) => state.posts).then((post) => setPosts(post));

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return !posts ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
