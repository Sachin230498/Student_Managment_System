const Course = require('../model/course');
const CourseContent = require('../model/courseContent');

// Admin creates a new course
const createCourse = async (req, res) => {
    const { title, description } = req.body;
    const userId = req.user._id; // Assume user information is set in the req by auth middleware

    try {
        const course = new Course({ title, description, createdBy: userId });
        await course.save();
        res.status(201).send({
            message: 'Course created successfully',
            course
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Admin updates a course
const updateCourse = async (req, res) => {
    const { title, description } = req.body;
    const courseId = req.params.id;

    try {
        const course = await Course.findByIdAndUpdate(courseId, { title, description }, { new: true });
        if (!course) {
            return res.status(404).send("Course not found");
        }
        res.status(200).send({
            message: 'Course updated successfully',
            course
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Failed to update course");
    }
};
//admin delete a course
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            return res.status(404).send("Course not found");
        }
        // Optionally, delete all related course content
        await CourseContent.deleteMany({ course: req.params.id });
        res.status(200).send("Course deleted successfully");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Failed to delete course");
    }
};

// Instructor adds course content

const addCourseContent = async (req, res) => {
    const { course, title, content } = req.body;
    const userId = req.user._id; // Assume user information is set in the req by auth middleware

    try {
        const courseContent = new CourseContent({ course, title, content, createdBy: userId });
        await courseContent.save();
        res.status(201).send({
            message: 'Course content added successfully',
            courseContent
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Instructor updates course content
const updateCourseContent = async (req, res) => {
    const { title, content } = req.body;
    const courseContentId = req.params.id;

    try {
        const courseContent = await CourseContent.findByIdAndUpdate(courseContentId, { title, content }, { new: true });
        if (!courseContent) {
            return res.status(404).send("Course content not found");
        }
        res.status(200).send({
            message: 'Course content updated successfully',
            courseContent
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Failed to update course content");
    }
};
// Instructor deletes course content
const deleteCourseContent = async (req, res) => {
    try {
        const courseContent = await CourseContent.findByIdAndDelete(req.params.id);
        if (!courseContent) {
            return res.status(404).send("Course content not found");
        }
        res.status(200).send("Course content deleted successfully");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Failed to delete course content");
    }
};

module.exports = {
    createCourse,
    addCourseContent,
    deleteCourse,    
    updateCourse,
    updateCourseContent,
    deleteCourseContent


    
};

