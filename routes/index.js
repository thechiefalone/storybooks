const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const { ensureIndexes } = require("../models/User");

//@desc Login/Landing Page
//@route GET/
router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

//@desc Dashboards
//@route GET/dashboard
router.get("/dashboard", ensureAuth, (req, res) => {
  res.render("dashboard");
});

module.exports = router;
