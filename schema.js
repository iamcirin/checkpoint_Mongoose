const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 100,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minlength: 10,
  },
  favoriteFoods: [String],
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("user", userSchema);
