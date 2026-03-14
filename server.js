const express = require("express")
const multer = require("multer")
const path = require("path")

const app = express()

app.use(express.static("public"))

const storage = multer.diskStorage({

destination: function(req,file,cb){
cb(null,"Upload/")
},

filename: function(req,file,cb){
cb(null,Date.now() + path.extname(file.originalname))
}

})

const upload = multer({storage:storage})

app.post("/upload", upload.single("image"), (req,res)=>{

res.send("Image Uploaded Successfully")

})

app.listen(3000, ()=>{

console.log("Server running on port 3000")

})