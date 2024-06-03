import mongoose, { Mongoose, Schema } from "mongoose";


const userSchema = new Schema({
    username: { type: String },
    email: { type: String,
        unique: true
     },
    password: { type: String },

}, {
    timestamps: true

}
);

const User = mongoose.model('users', userSchema)
export default User;