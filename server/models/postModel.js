const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: 'no-photo.jpg',
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
        text: {
          type: String,
          required: true,
        },
        name: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = Post = mongoose.model('post', PostSchema);
