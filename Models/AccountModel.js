const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AccountSchema = new Schema({
    userId:{
        type: String,
    },
    provider:{
        type: String,
    },
    providerAccountId: {
        type: String,
    },
    accessToken:{
        type: String,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Account', AccountSchema)