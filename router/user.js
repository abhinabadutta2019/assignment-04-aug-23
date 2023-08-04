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
router.put("/updateAge", async (req, res) => {
  //
  try {
    const ageValue = req.body.age;
    //
    if (ageValue == null || ageValue == undefined) {
      //
      return res.json({ message: "ageValue not mentioned from frontend" });
    }
    //
    const user = await User.findOne({ username: req.body.username });
    //
    if (!user) {
      return res.json({ message: "user not found in database" });
    }
    //

    const updatedAge = await User.findOne({ username: req.body.username });

    //

    /////////////////////////
    res.json({ message: "update success" });

    //
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//
module.exports = router;
