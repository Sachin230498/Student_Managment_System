const bcrypt = require('bcrypt');
const  User = require('../model/Usermodel.js');
const jwt = require("jsonwebtoken");
const allowRoles = require('../middleware/roles.js');

// const Subject = require('../models/subjectSchema.js'); 
//new one with my modifications 

const teacherRegister = async (req, res) => {
    const { name, email, password, role, gender, phone, subject } = req.body;
    try {
        const existingTeacherByEmail = await User.findOne({ email });

        if (existingTeacherByEmail) {
            return res.status(409).send({ message: 'Email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const teacher = new User({ name, email, password: hashedPass, role, gender, phone, subject });

        let result = await teacher.save();
        result.password = undefined;
        res.status(201).send({
            message: "Registered successfully",
            userDetails: {
                id: result._id,
                name: result.name,
                email: result.email,
                role: result.role,
                gender: result.gender,
                phone: result.phone,
                subject: result.subject
            }
        });
    } catch (err) {
        res.status(500).json(err);
    }
};
const teacherLogIn = async (req, res) => {
    try {
        let teacher = await User.findOne({ email: req.body.email });
        if (teacher) {
            const validated = await bcrypt.compare(req.body.password, teacher.password);
            if (validated) {
                teacher.password = undefined;

// // Generate JWT
    const token = jwt.sign(
        { _id: teacher._id, role: teacher.role },
       "abcd",
        { expiresIn: "1h" }
      );

  
              res.status(200).send({ message: "Login successful",token,role:teacher.role });
            } else {
                res.status(401).send({ message: "Invalid password" });
            }
        } else {
            res.status(404).send({ message: "Email not registered" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
const getAllStudents = async (req, res) => {
    try {
        const students = await User.find({ role: 'Student' });
        res.status(200).send(students);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Failed to fetch students");
    }
};

const promoteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { role: "Instructor" }, { new: true });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).send("User promoted to Instructor");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Failed to promote user");
    }
};

// Set a user's subject to "Paid"
const setPaidStatus = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { subject: "Paid" }, { new: true });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).send("User subject set to Paid");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Failed to update user subject");
    }
};

// Delete a user
const deleteUser = async (req, res) => {
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
};

  












// const getTeachers = async (req, res) => {
//     try {
//         let teachers = await Teacher.find({ school: req.params.id })
//             .populate("teachSubject", "subName")
//             .populate("teachSclass", "sclassName");
//         if (teachers.length > 0) {
//             let modifiedTeachers = teachers.map((teacher) => {
//                 return { ...teacher._doc, password: undefined };
//             });
//             res.send(modifiedTeachers);
//         } else {
//             res.send({ message: "No teachers found" });
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// const getTeacherDetail = async (req, res) => {
//     try {
//         let teacher = await Teacher.findById(req.params.id)
//             .populate("teachSubject", "subName sessions")
//             .populate("school", "schoolName")
//             .populate("teachSclass", "sclassName")
//         if (teacher) {
//             teacher.password = undefined;
//             res.send(teacher);
//         }
//         else {
//             res.send({ message: "No teacher found" });
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }

// const updateTeacherSubject = async (req, res) => {
//     const { teacherId, teachSubject } = req.body;
//     try {
//         const updatedTeacher = await Teacher.findByIdAndUpdate(
//             teacherId,
//             { teachSubject },
//             { new: true }
//         );

//         await Subject.findByIdAndUpdate(teachSubject, { teacher: updatedTeacher._id });

//         res.send(updatedTeacher);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// };

// const deleteTeacher = async (req, res) => {
//     try {
//         const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);

//         await Subject.updateOne(
//             { teacher: deletedTeacher._id, teacher: { $exists: true } },
//             { $unset: { teacher: 1 } }
//         );

//         res.send(deletedTeacher);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// };

// const deleteTeachers = async (req, res) => {
//     try {
//         const deletionResult = await Teacher.deleteMany({ school: req.params.id });

//         const deletedCount = deletionResult.deletedCount || 0;

//         if (deletedCount === 0) {
//             res.send({ message: "No teachers found to delete" });
//             return;
//         }

//         const deletedTeachers = await Teacher.find({ school: req.params.id });

//         await Subject.updateMany(
//             { teacher: { $in: deletedTeachers.map(teacher => teacher._id) }, teacher: { $exists: true } },
//             { $unset: { teacher: "" }, $unset: { teacher: null } }
//         );

//         res.send(deletionResult);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// };

// const deleteTeachersByClass = async (req, res) => {
//     try {
//         const deletionResult = await Teacher.deleteMany({ sclassName: req.params.id });

//         const deletedCount = deletionResult.deletedCount || 0;

//         if (deletedCount === 0) {
//             res.send({ message: "No teachers found to delete" });
//             return;
//         }

//         const deletedTeachers = await Teacher.find({ sclassName: req.params.id });

//         await Subject.updateMany(
//             { teacher: { $in: deletedTeachers.map(teacher => teacher._id) }, teacher: { $exists: true } },
//             { $unset: { teacher: "" }, $unset: { teacher: null } }
//         );

//         res.send(deletionResult);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// };

// const teacherAttendance = async (req, res) => {
//     const { status, date } = req.body;

//     try {
//         const teacher = await Teacher.findById(req.params.id);

//         if (!teacher) {
//             return res.send({ message: 'Teacher not found' });
//         }

//         const existingAttendance = teacher.attendance.find(
//             (a) =>
//                 a.date.toDateString() === new Date(date).toDateString()
//         );

//         if (existingAttendance) {
//             existingAttendance.status = status;
//         } else {
//             teacher.attendance.push({ date, status });
//         }

//         const result = await teacher.save();
//         return res.send(result);
//     } catch (error) {
//         res.status(500).json(error)
//     }
// };

module.exports = {
    teacherRegister,
    teacherLogIn,
    promoteUser,
    setPaidStatus,
    deleteUser,
    getAllStudents

    // getTeachers,
    // getTeacherDetail,
    // updateTeacherSubject,
    // deleteTeacher,
    // deleteTeachers,
    // deleteTeachersByClass,
    // teacherAttendance
};