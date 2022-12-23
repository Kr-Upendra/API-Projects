const { default: mongoose } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const blogSchema = new mongoose.Schema({
  id: false,
  title: {
    type: String,
    required: [true, "blog must contains a title."],
    unique: [true, "blog title must be unique"],
    trim: true,
    minlength: [10, "blog title must be atleast 15 characters"],
    maxlength: [50, "blog title must be less than 50 characters"],
  },
  body: {
    type: String,
    required: [true, "blog must have a body"],
    trim: true,
    minlength: [150, "blog body must be atleast 150 characters"],
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
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
