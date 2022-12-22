const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
// const ReviewModel = require("./reviewModel");

const productSchema = new mongoose.Schema(
  {
    id: false,
    name: {
      type: String,
      unique: [true, "product name can't be same!"],
      required: [true, "A product must contain a name!"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "A product must contain a price!"],
    },
    cDate: {
      type: Date,
      default: Date.now(),
      required: [true, "A product must contain create date!"],
    },
    uDate: {
      type: Date,
      default: Date.now(),
      required: [true, "A product must contain update date!"],
    },
    _id: {
      type: String,
      default: function genUuid() {
        return uuidv4();
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.virtual("reviews", {
  ref: "ReviewModel",
  foreignField: "product",
  localField: "_id",
});

const ProductModel = mongoose.model("ProductModel", productSchema);
module.exports = ProductModel;
