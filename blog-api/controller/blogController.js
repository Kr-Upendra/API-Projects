const catchAsync = require("../utils/catchAsync");
const Blog = require("../models/blogModel");

exports.getAllBlogs = catchAsync(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json({
    status: "success",
    message: "successfully retrieve all blogs",
    length: blogs.length,
    blogs,
  });
});

exports.createBlog = catchAsync(async (req, res) => {
  const blog = await Blog.create(req.body);
  res.status(201).json({
    status: "success",
    message: "created blog successfully!",
    blog,
  });
});

exports.getBlog = catchAsync(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog)
    return res.status(404).json({
      status: "fail",
      message: "blog with given id not found!",
    });
  res.status(200).json({
    status: "success",
    message: "successfully got a blog!",
    blog,
  });
});

exports.updateBlog = catchAsync(async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id);
  if (!blog)
    return res.status(404).json({
      status: "fail",
      message: "blog with given id not found!",
    });
  res.status(200).json({
    status: "success",
    message: "updated blog successfully!",
    blog,
  });
});

exports.deleteBlog = catchAsync(async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog)
    return res.status(404).json({
      status: "fail",
      message: "blog with given id not found!",
    });
  res.status(200).json({
    status: "success",
    message: "deleted blog successfully!",
    blog,
  });
});
