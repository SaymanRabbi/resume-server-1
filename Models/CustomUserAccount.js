const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomUserAccountSchema = new Schema({
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    displayName:{
        type: String,
    },
    photoURL:{
        type: String,
    }
},{
    timestamps: true
})

module.exports = mongoose.model('CustomUserAccount', CustomUserAccountSchema)