const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name!"],
    trim: true,
    unique: [true, "its already exist!"],
    minlength: [6, "name must be atleast six characters long!"],
  },
  image: {
    type: String,
  },
  uploadAt: {
    type: Date,
    default: Date.now(),
  },

  category: {
    type: [String],
    required: [true, "please add some category"],
    max: 5,
    min: 1,
  },
  user: {
    type: String,
    required: [true, "please provide your name!"],
    trim: true,
    default: "Admin",
  },
});

const Meme = mongoose.model("Meme", memeSchema);

module.exports = Meme;
