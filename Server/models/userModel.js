const moogoose = require("mongoose");

const userSchema = new moogoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin", "partner"],
      required: true,
      default: "user",
    },
  },
  { timestamps: true }
);

const User = moogoose.model("User", userSchema);

module.exports = User;
