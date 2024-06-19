const express = require('express');
const multer = require('multer');
const path = require('path');
// const app = express();
// const port = 8081;

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "../uploads"); // Adjusted the path to one level up

    cb(null, uploadPath);// Save uploaded files to ./uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp + original extension
  }
});

// Initiate Multer Upload Middleware
const upload = multer({ storage: storage });

module.exports = upload;

