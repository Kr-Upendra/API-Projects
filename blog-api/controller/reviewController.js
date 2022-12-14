const Review = require("../models/reviewModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllReviews = catchAsync(async (req, res) => {
  const reviews = await Review.find();
  res.status(200).json({
    status: "success",
    message: "successfully retrieve all reviews",
    length: reviews.length,
    reviews,
  });
});

exports.createReview = catchAsync(async (req, res) => {
  const review = await Review.create(req.body);
  res.status(201).json({
    status: "success",
    message: "created review successfully!",
    review,
  });
});

exports.deleteReview = catchAsync(async (req, res) => {
  const review = await Review.findByIdAndDelete(req.params.id);
  if (!review)
    return res.status(404).json({
      status: "fail",
      message: "review with given id not found!",
    });
  res.status(200).json({
    status: "success",
    message: "created review successfully!",
    review,
  });
});
