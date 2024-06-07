const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
    
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
    role: { 
        type: String, required: true, enum: ['Admin', 'Instructor', 'Student'],         default:"Student",

     }


});

const User = mongoose.model('Instructor', UserSchema);

module.exports = User;
