import express from "express";
import Bcrypt from "bcryptjs";
var router = express.Router();
import User from "../models/user.js";

//get user list
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}).exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

//user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
    if (!user) {
      res.status(400).json({ message: "email does not exist!" });
    } else if (!Bcrypt.compareSync(password, user.password)) {
      res.status(400).json({ message: "Invalid password" });
    } else {
      res.send({ message: user });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

//create member

router.post("/create-member", async (req, res) => {
  try {
    const newUser = new User(req.body);
    newUser.password = Bcrypt.hashSync(req.body.password, 10);
    const user = await User.findOne({ email: req.body.email }).exec();

    if (user) {
      res.status(500).json({ message: "User already exist" });
      return;
    } else {
      newUser.userType = "Member";
      await newUser.save();
      res.json({ success: true });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
