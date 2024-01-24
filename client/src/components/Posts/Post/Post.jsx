import React from "react";
import useStyles from "./styles.js";

import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

import moment from "moment";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt.js";
import DeleteIcon from "@material-ui/icons/Delete.js";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz.js";

const Post = ({ post }) => {
  const { creator, title, message, tags, selectedFile, likeCount } = post;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={selectedFile} title={title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{creator}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {tags.map((tag) => `#${tag} `)}
        </Typography>
        <CardContent>
          <Typography variant="h5" className={classes.title} gutterBottom>
            {message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAltIcon fontSize="small" />
            Like
            {likeCount}
          </Button>
          <Button size="small" color="secondary" onClick={() => {}}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default Post;
