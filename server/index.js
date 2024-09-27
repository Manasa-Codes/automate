const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

// mongoose.connect('mongodb://127.0.01:27017/socio.socio')

const storage = multer.diskStorage({
    destination:(req, file,cb) =>{
        cb(null, 'public/Images')
    },
    filename:(req, file, cb) =>{
        cb(null, file.fieldname+"_"+Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({
    storage:storage
})

app.post('/upload',upload.single('file'), (req,res) =>{

console.log(req.file)
})
app.listen(3001, () =>{
    console.log("Server is running")
})