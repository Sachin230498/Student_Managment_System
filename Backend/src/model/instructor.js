const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        enum:["student", "instructor", "admin"],
        default:"instructor",

    },
}, 
{
    timestamps: true
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
