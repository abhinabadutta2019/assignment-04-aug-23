const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//
const User = require("../models/User");

//

router.get("/updatePage", async (req, res) => {
  //
  try {
    res.json({ message: "update page ..." });
    //
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//
module.exports = router;
