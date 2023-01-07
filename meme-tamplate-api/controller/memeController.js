const multer = require("multer");
const AppError = require("../utils/appError");
const Meme = require("../models/memeModel");
const catchAsync = require("../utils/catchAsync");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/meme-images");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.originalname}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! please upload only image", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadMeme = upload.single("image");

exports.getAll = catchAsync(async (req, res, next) => {
  const memes = await Meme.find();

  res.status(200).json({
    status: "success",
    message: "all memes",
    length: memes.length,
    data: memes,
  });
});

exports.getAMeme = catchAsync(async (req, res, next) => {
  const meme = await Meme.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: meme,
  });
});

exports.createMeme = catchAsync(async (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }
  const meme = await Meme.create(req.body);
  res.status(201).json({
    status: "success",
    message: "meme created successfully!",
    data: meme,
  });
});

exports.updateMeme = catchAsync(async (req, res, next) => {
  const meme = await Meme.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    message: "meme updated successfully!",
    data: meme,
  });
});

exports.deleteMeme = catchAsync(async (req, res, next) => {
  const meme = await Meme.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    message: "meme deleted successfully!",
    data: null,
  });
});

exports.getStats = catchAsync(async (req, res, next) => {
  const name = req.query.name;
  const stats = await Meme.findOne({
    name: {
      $regex: name,
      $options: "i",
    },
  });
  res.status(200).json({
    status: "success",
    data: stats,
  });
});

// get meme by search meme name
exports.searchByName = catchAsync(async (req, res, next) => {
  const name = req.body.name;
  const search = await Meme.findOne({
    name: { $regex: new RegExp(name, "i") },
  }).select("-category -__v");
  res.status(200).json({
    status: "success",
    data: search,
  });
});

exports.searchFromMovie = catchAsync(async (req, res, next) => {
  const search = await Meme.find({
    category: { $regex: new RegExp("movie", "i") },
  }).select("-category -__v");
  res.status(200).json({
    status: "success",
    length: search.length,
    data: search,
  });
});

// get meme by movie or actor name
exports.searchByMovieName = catchAsync(async (req, res, next) => {
  const movieName = req.body.movieName;
  const movieMeme = await Meme.find({
    category: { $regex: new RegExp(movieName, "i") },
  }).select("-category -__v");
  res.status(200).json({
    status: "success",
    length: movieMeme.length,
    data: movieMeme,
  });
});
