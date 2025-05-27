import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  username : {type : String, length : {min : 5, max : 15}},
  email : {type : String, required : true},
  password : {type : String, required : true}
})

export default mongoose.model("User", UserSchema)