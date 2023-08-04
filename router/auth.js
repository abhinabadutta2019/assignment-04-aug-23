const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//
const User = require("../models/User");
//
router.post("/signup", async (req, res) => {
  //
  try {
    //
    // console.log(req.body);

    // console.log(req.body.username.length, "username-length");
    // console.log(req.body.password.length, "password-length");

    if (req.body.username.length < 5 || req.body.password.length < 5) {
      //
      return res.json({ message: "username or password is too small" });
    }

    //new user creting based on -- User model
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
    });

    console.log(newUser, "newUser");
    //
    const user = await newUser.save();
    //
    if (!user) {
      //
      return res.json({
        message: "error : user not creted and saved to database",
      });
    }

    //
    res.json({ message: "new user created", user: user });
  } catch (err) {
    if (err.code == 11000) {
      return res.json({ message: "username alredy taken, use, different one" });
    }
    console.log(err);
    //

    res.json(err);
  }
});

//
module.exports = router;
