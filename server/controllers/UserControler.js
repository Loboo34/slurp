const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};

//login
const logUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.login( name, email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
 
};

//register
const regUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.regUser(name, email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { logUser, regUser };
