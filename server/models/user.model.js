import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    // profilePicture: {
    //   type: String,
    //   default: ""
    // }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("User", userSchema);

export default UserModel;