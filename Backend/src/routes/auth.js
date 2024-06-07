const express = require('express');
const {   teacherRegister,teacherLogIn } = require('../controller/User');
// const {sclassCreate, sclassList,getSclassDetail} = require("../controller/courseController")
const { addStudent, getStudents } = require('../controller/student');
const auth = require('../middleware/Auth');
const allowRoles = require('../middleware/roles');
const  User = require("../model/Usermodel")
const { createCourse, addCourseContent } = require('../controller/courseController');



const router = express.Router();




router.post('/register', teacherRegister);
router.post('/login', teacherLogIn);

// router.post('/course',sclassCreate);
// router.get('/courseList',sclassList);
// router.get('/courseDetails/:id',getSclassDetail);
router.post('/course', auth, allowRoles('Admin'), createCourse);
router.post('/courseContent', auth, allowRoles('Instructor'), addCourseContent);


router.post('/add', addStudent);
router.get('/getstudent', getStudents);


router.put('/promote/:id', auth, allowRoles('Admin'), async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { role: "Instructor" },
        { new: true }
      );
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send("User promoted to Instructor");
    } catch (error) {
      console.error("Error:", error);
     res.status(500).send("Failed to promote user");
    }
  });
  
  router.put('/paid/:id', auth, allowRoles('Admin'), async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { subject: "Paid" },
        { new: true }
      );
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send("User promoted to paid course");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Failed to promote user");
    }
  });


  
// Route to delete a user
router.delete(
  "/user/:id",
  auth,
  allowRoles("Admin"),
  async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send("User deleted successfully");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Failed to delete user");
    }
  }
);
  


module.exports = router;
