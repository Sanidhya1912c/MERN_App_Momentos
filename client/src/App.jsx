import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { Posts, Post, Form } from "./components/index.js";
import useStyles from "./styles.js";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts.js";

import memories from "./images/memories.png";
import { useEffect } from "react";

function App() {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Momento
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="Momento"
          height={60}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

//the posts this line is not working
//  const posts = useSelector((state) => state.posts);

export default App;
