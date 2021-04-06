const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StormtrooperSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    rollno: {
      type: Number,
    },
  },
  { collection: "stormtrooper" }
);

module.exports = mongoose.model("stormtrooper", StormtrooperSchema);
