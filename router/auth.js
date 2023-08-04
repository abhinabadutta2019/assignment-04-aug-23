const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//
const User = require("../models/User");

// frontend

//signup

router.get("/signup", async (req, res) => {
  //
  try {
    res.render("signup");
  } catch (err) {
    console.log(err);
  }
});

//
router.get("/login", async (req, res) => {
  //
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
  }
});

////////////////////////

//--backend
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
router.post("/login", async (req, res) => {
  //
  try {
    const user = await User.findOne({ username: req.body.username });

    //
    if (!user) {
      return res.json({ message: "user not found in ddatabase" });
    }
    //

    //
    if (req.body.password != user.password) {
      //
      return res.json({ message: "password not matched" });
    }
    //
    res.json({ message: "password matched", user: user });
    //
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//
module.exports = router;
