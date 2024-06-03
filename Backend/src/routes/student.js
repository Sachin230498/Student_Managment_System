const express= require("express");
const router =express.Router();
const Student =require('../model/student');
//get all the students
router.get('/student', async (req, res)=>{
    try {
        const students=await Student.find();
        res.status(200).json(students);
    }catch(err){
        res.status(500).json({message:err.message});

    }
});
//add a new student
router.post('/poststudent', async (req,res)=>{
    const student=new Student(req.body);
    try {
        const newStudent=await student.save();
        res.status(201).json(newStudent);
        
    } catch (err) {
        res.status(400).json({message:err.message})
        
    }
});
module.exports =router 