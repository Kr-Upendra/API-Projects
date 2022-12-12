const express = require("express");
const appController = require("../controller/appController");
const router = express.Router();

router.route("/mathfact").get(appController.mathFact);
router.route("/datefact").get(appController.dateFact);
router.route("/randomfact").get(appController.randomFact);
router.route("/yearfact").get(appController.yearFact);
router.route("/triviafact").get(appController.triviaFact);

module.exports = router;
