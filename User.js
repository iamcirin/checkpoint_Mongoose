// const mongoose = require("mongoose");
// const addressSchema = new mongoose.Schema({
//   street: String,
//   city: String,
// });
// const userSchema = new mongoose.Schema({
//   name: String,
//   age: {
//     type: Number,
//     min: 1,
//     validate: {
//       validator: (v) => {
//         v % 2 === 0;
//       },
//       message: (props) => `${props.valus} is not even number`,
//     },
//   },
//   email: {
//     type: String,
//     required: true,
//     lowerace: true,
//     minlength: 10,
//   },
//   createdAt: {
//     type: Date,
//     immutable: true,
//     default: () => Date.now(),
//   },
//   updatedAt: {
//     type: Date,
//     default: () => Date.now(),
//   },
//   bestFriend: mongoose.SchemaTypes.ObjectId,
//   hobbies: [String],
//   address: addressSchema,
// });

// module.exports = mongoose.model("User", userSchema); // so the collection name is going to be Users
