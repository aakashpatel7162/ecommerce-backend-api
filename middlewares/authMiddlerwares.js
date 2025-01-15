const express = require("express");
const { generateToken } = require("../config/utils/jwtUtils");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json({ token: generateToken(user) });
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) { message: "User not found"  }
};
const rejister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.Create({ name, email, password });
    res.status(201).json({ token: generateToken(user) });
  } catch (error) {
    res.status(400).json({ message: "Registration failed" });
  }
};
module.exports = { login, rejister };
