import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    blogs:[{type: mongoose.Types.ObjectId,ref:"Blog", required:true}],
});
export default mongoose.model('User',userSchema);
//stored as users in mungodb because of the naming convention that when you store with a capital letter, all of the fields will be in small letters and also in its plural form i.e User stored as users
