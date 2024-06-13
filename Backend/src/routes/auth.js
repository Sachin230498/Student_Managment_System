//routes/auth.js
const express = require('express');
const {   teacherRegister,teacherLogIn } = require('../controller/User');
// const {sclassCreate, sclassList,getSclassDetail} = require("../controller/courseController")
const { addStudent, getStudents } = require('../controller/student');
const auth = require('../middleware/Auth');
const allowRoles = require('../middleware/roles');
const  User = require("../model/Usermodel")
const { createCourse, addCourseContent,deleteCourse,updateCourse, updateCourseContent,deleteCourseContent } = require('../controller/courseController');
const { promoteUser, setPaidStatus, deleteUser } = require('../controller/User');

const router = express.Router();




router.post('/register', teacherRegister);
router.post('/login', teacherLogIn);

// router.post('/course',sclassCreate);
// router.get('/courseList',sclassList);
// router.get('/courseDetails/:id',getSclassDetail);
router.post('/course', auth, allowRoles('Admin'), 
// upload.single("image"),
 createCourse);
router.delete('/course/:id', auth, allowRoles('Admin'), deleteCourse);
router.put('/course/:id', auth, allowRoles('Admin'), updateCourse);



router.post('/courseContent', auth, allowRoles('Instructor') , addCourseContent);
router.put('/courseContent/:id', auth, allowRoles('Instructor'), updateCourseContent); 
router.delete('/courseContent/:id', auth, allowRoles('Instructor'), deleteCourseContent); // Route for deleting course content



router.post('/add', addStudent);
router.get('/getstudent', getStudents);


  
router.put('/promote/:id', auth, allowRoles('Admin'), promoteUser);

// Set a user's subject to "Paid"
router.put('/paid/:id', auth, allowRoles('Admin'), setPaidStatus);

// Delete a user by admin only
router.delete('/user/:id', auth, allowRoles('Admin'), deleteUser);



module.exports = router;
