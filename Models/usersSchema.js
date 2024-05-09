import mongoose from "mongoose";

//created userSchema
const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    imgpath: {
      type: String,
      required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
  }
);

//created model
const userModel = mongoose.model("users", userSchema);
export default userModel;
