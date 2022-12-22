const ReviewModel = require("../models/reviewModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllReview = catchAsync(async (req, res) => {
  const reviews = await ReviewModel.find();
  res.status(200).json({
    status: "success",
    message: "got all reviews!",
    length: reviews.length,
    reviews,
  });
});

exports.createReview = catchAsync(async (req, res) => {
  const review = await ReviewModel.create(req.body);
  res.status(201).json({
    status: "success",
    message: "review created successfully!",
    review,
  });
});

exports.deleteReview = catchAsync(async (req, res) => {
  const review = await ReviewModel.findByIdAndDelete(req.params.id);
  if (!review)
    return res.status(404).json({
      status: "fail",
      message: "given id not found!",
    });

  res.status(200).json({
    status: "success",
    message: "deleted review successfully!",
    review: null,
  });
});
