const mongoose = require('mongoose');

const CourseContentSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const CourseContent = mongoose.model('CourseContent', CourseContentSchema);

module.exports = CourseContent;
