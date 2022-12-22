const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const reviewSchema = new mongoose.Schema(
  {
    id: false,
    _id: {
      type: String,
      default: function genId() {
        return uuidv4();
      },
    },
    userId: {
      type: String,
      default: function genUserId() {
        return uuidv4();
      },
      required: [true, "user id required!"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Please write something about product!"],
    },
    cDate: {
      type: Date,
      default: Date.now(),
    },
    uDate: {
      type: Date,
      default: Date.now(),
    },
    product: {
      type: mongoose.Schema.Types.String,
      ref: "ProductModel",
      required: [true, "Review must belong to a product!"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const ReviewModel = mongoose.model("ReviewModel", reviewSchema);
module.exports = ReviewModel;
