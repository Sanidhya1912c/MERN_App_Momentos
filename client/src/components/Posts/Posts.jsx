import React from "react";
import useStyles from "./styles.js";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post.jsx";

const Posts = () => {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
  