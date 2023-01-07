const express = require("express");
const memeController = require("../controller/memeController");

const router = express.Router();

router.route("/search").get(memeController.searchByName);
router.route("/searchFromMovie").get(memeController.searchFromMovie);

router
  .route("/")
  .get(memeController.getAll)
  .post(memeController.uploadMeme, memeController.createMeme);

router
  .route("/:id")
  .get(memeController.getAMeme)
  .patch(memeController.updateMeme)
  .delete(memeController.deleteMeme);

module.exports = router;