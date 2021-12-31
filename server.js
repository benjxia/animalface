
const express = require("express");
const path = require("path");
const multer = require("multer");
require('dotenv').config();

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname)
  }
})

const upload = multer({ storage: storage }).single('file')

app.post('/upload', (req, res) => {
  
  upload(req, res, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.send([req.file,req.file,"some string"]);
  });
  
 // console.log(file.originalname);
});



app.use(express.static('public'));


  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));