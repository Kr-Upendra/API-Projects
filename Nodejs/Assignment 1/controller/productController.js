const ProductModel = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllProducts = catchAsync(async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).json({
    status: "success",
    message: "got all products!",
    length: products.length,
    products,
  });
});

exports.getAProduct = catchAsync(async (req, res) => {
  const product = await ProductModel.findById(req.params.id).populate(
    "reviews"
  );
  if (!product)
    return res.status(404).json({
      status: "fail",
      message: "product with given id not found!",
    });
  res.status(200).json({
    status: "success",
    message: "product found!",
    product,
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const product = await ProductModel.create(req.body);
  res.status(201).json({
    status: "success",
    message: "product created successfully!",
    product,
  });
});

exports.updateProduct = catchAsync(async (req, res) => {
  const product = await ProductModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!product)
    return res.status(404).json({
      status: "fail",
      message: "product with given id not found!",
    });
  res.status(200).json({
    status: "success",
    message: "product updated successfully!",
    product,
  });
});

exports.deleteProduct = catchAsync(async (req, res) => {
  const product = await ProductModel.findByIdAndDelete(req.params.id);

  if (!product)
    return res.status(404).json({
      status: "fail",
      message: "product with given id not found!",
    });
  res.status(200).json({
    status: "success",
    message: "deleted a product!",
    product: null,
  });
});
