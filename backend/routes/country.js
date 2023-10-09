const express = require("express");
const router = express.Router();

// controller
const { getCountry } = require("../controllers/country");

// routes
router.post("/country", getCountry);

module.exports = router;
