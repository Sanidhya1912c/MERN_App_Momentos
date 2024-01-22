import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/post.js";
import PostMessage from "./models/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

mongoose
  .connect("mongodb://localhost:27017/momentos")
  .then(() => {
    app.listen(3000);

    return PostMessage.find();
  })
  .then((data) => {
    if (data === null) {
      const post = new PostMessage({
        title: "Book",
        message: "nice ",
        creator: "John",
        tags: [null],
        selectedFile: "none",
        likeCount: 0,
        createdAt: new Date(),
      });
      post.save();
    }
  })
  .catch((err) => console.log(err));
