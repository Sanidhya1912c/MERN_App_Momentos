import mongoose from "mongoose";

const { Schema } = mongoose;

const Post = new Schema({
  title: {
    type: String,
    required: true,
  },
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", Post);

export default PostMessage;
