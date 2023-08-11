const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static regeisternup method
userSchema.statics.regUser = async function (name, email, password) {
  //validation
  if (!name || !email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Weak password");
  } //

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already exists");
  }

  //hass pass
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hash });

  return user;
};

//static singin method
userSchema.statics.login = async function (name, email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  //find users email
  const user = await this.findOne({  email });
  const userName = await this.findOne({ name });

  if (!user) {
    throw Error("Incorrect Email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Invalid Password");
  }
  return user;
};

module.exports = mongoose.model("user", userSchema);
