// const course = require('../model/course.js');
// // const student = require('../model/student.js');
// // const Subject = require('../models/subjectSchema.js');
// // const Teacher = require('../models/teacherSchema.js');

// const sclassCreate = async (req, res) => {
//     try {
//         const sclass = new course({
//            course: req.body.course,
//             school: req.body.adminID
//         });

//         const existingSclassByName = await course.findOne({
//             course: req.body.course,
//             school: req.body.adminID
//         });

//         if (existingSclassByName) {
//             res.send({ message: 'Sorry this class name already exists' });
//         }
//         else {
//             const result = await sclass.save();
//             res.send(result);
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// const sclassList = async (req, res) => {
//     try {
//         let sclasses = await course.find()// retrieve all courses 
//         if (sclasses.length > 0) {
//             res.send(sclasses)
//         } else {
//             res.send({ message: "No sclasses found" });
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// const getSclassDetail = async (req, res) => {
//     try {
//         let sclass = await course.findById(req.params.id);
//         if (sclass) {
//             res.status(200).send(sclass);
//         } else {
//             res.status(404).send({ message: "No class found" });
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }

// const getSclassStudents = async (req, res) => {
//     try {
//         let students = await Student.find({ sclassName: req.params.id })
//         if (students.length > 0) {
//             let modifiedStudents = students.map((student) => {
//                 return { ...student._doc, password: undefined };
//             });
//             res.send(modifiedStudents);
//         } else {
//             res.send({ message: "No students found" });
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }

// // const deleteSclass = async (req, res) => {
// //     try {
// //         const deletedClass = await Sclass.findByIdAndDelete(req.params.id);
// //         if (!deletedClass) {
// //             return res.send({ message: "Class not found" });
// //         }
// //         const deletedStudents = await Student.deleteMany({ sclassName: req.params.id });
// //         const deletedSubjects = await Subject.deleteMany({ sclassName: req.params.id });
// //         const deletedTeachers = await Teacher.deleteMany({ teachSclass: req.params.id });
// //         res.send(deletedClass);
// //     } catch (error) {
// //         res.status(500).json(error);
// //     }
// // }

// // const deleteSclasses = async (req, res) => {
// //     try {
// //         const deletedClasses = await Sclass.deleteMany({ school: req.params.id });
// //         if (deletedClasses.deletedCount === 0) {
// //             return res.send({ message: "No classes found to delete" });
// //         }
// //         const deletedStudents = await Student.deleteMany({ school: req.params.id });
// //         const deletedSubjects = await Subject.deleteMany({ school: req.params.id });
// //         const deletedTeachers = await Teacher.deleteMany({ school: req.params.id });
// //         res.send(deletedClasses);
// //     } catch (error) {
// //         res.status(500).json(error);
// //     }
// // }


// module.exports = { sclassCreate,sclassList, getSclassDetail };
// //, deleteSclass, deleteSclasses, getSclassDetail, getSclassStudents





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

module.exports = {
    createCourse,
    addCourseContent,
    
};

