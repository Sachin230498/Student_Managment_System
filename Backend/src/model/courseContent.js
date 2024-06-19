const mongoose = require('mongoose');

const CourseContentSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const CourseContents = mongoose.model('CourseContents', CourseContentSchema);

module.exports = CourseContents;
