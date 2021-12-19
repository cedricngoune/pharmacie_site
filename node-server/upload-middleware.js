const multer = require("multer")
const fs = require("fs")

const myStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __dirname + "/uploads")
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  },
})

module.exports = myStorage
