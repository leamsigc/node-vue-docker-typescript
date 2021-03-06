import { Session } from "express-session";
import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    unique: true,
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: String,
  date: {
    type: Date,
    default: Date.now
  }
});
userSchema.plugin(passportLocalMongoose, {
  session: false,
  usernameUnique: false
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
