const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const reviewSchema = new mongoose.Schema(
  {
    id: false,
    userId: {
      type: String,
      default: function genUserId() {
        return uuidv4();
      },
    },
    description: {
      type: String,
      trim: true,
      required: [true, "A review must be some descriptive."],
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
    blog: {
      type: mongoose.Schema.Types.String,
      ref: "Blog",
      required: [true, "A review must belong to a blog!"],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
