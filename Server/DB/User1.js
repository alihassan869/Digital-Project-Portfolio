require('dotenv').config();
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  Cpassword: String,
  Checkbox: Boolean,
  token: String,
  Date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = UserModel = new mongoose.model(
  process.env.COLLECTION1,
  UserSchema,
);
