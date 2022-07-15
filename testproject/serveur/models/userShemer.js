import Mongoose from 'mongoose';

const UserSchemer=new Mongoose.Schema({
    name:String,
    password:String,
    email:String,
})
const User=Mongoose.model('User',UserSchemer);

export default User;