const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResumeSchema = new Schema({
    email:{
        type: String,
    },
    resumeId:{
        type: String,
    },
    tittle:{
        type: String,
    },
    personal_details:{
        type: Object,
    },
    employment:[],
    education:[],
    skills:[],
    references:[],
    languages:[],
},{
    timestamps: true
})

module.exports = mongoose.model('Resume', ResumeSchema)