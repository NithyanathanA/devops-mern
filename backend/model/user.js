import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user_name:{
        type:String
    },
    email:{
        type:String
    }
})
const UserModel = mongoose.model('user_info', userSchema);

export default UserModel;