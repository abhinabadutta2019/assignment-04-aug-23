const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//
const User = require("../models/User");

//

//

router.get("/updatePage", async (req, res) => {
  //
  try {
    // res.json({ message: "update page ..." });
    res.render("update");
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

    console.log(user, "user");
    //
    if (!user) {
      return res.json({ message: "user not found in database" });
    }
    //

    const updatedAge = await User.findByIdAndUpdate(
      { _id: user._id },
      { age: ageValue },
      { new: true }
    );

    //

    /////////////////////////
    res.json({ message: "update success", user: updatedAge });

    //
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//
router.get("/userDetails/:id", async (req, res) => {
  //
  try {
    const user = await User.findOne({ _id: req.params.id });
    //
    // res.render("userDetails");
    res.json();
  } catch (err) {
    //
    console.log(err);
    res.json(err);
  }
});

//
module.exports = router;
