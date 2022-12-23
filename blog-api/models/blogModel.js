const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const blogSchema = new mongoose.Schema(
  {
    id: false,
    title: {
      type: String,
      required: [true, "blog must contains a title."],
      unique: [true, "blog title must be unique"],
      trim: true,
      minlength: [10, "blog title must have atleast 10 characters"],
    },
    body: {
      type: String,
      required: [true, "blog must have a body"],
      trim: true,
    },
    cDate: {
      type: Date,
      default: Date.now(),
    },
    uDate: {
      type: Date,
      default: Date.now(),
    },
    _id: {
      type: String,
      default: function genId() {
        return uuidv4();
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

blogSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "blog",
  localField: "_id",
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
