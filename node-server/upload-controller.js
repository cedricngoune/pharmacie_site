const multer = require("multer")
const myStorage = require("./upload-middleware")

const fileUploadController = multer({
  storage: myStorage,
}).single("file")

module.exports = fileUploadController
