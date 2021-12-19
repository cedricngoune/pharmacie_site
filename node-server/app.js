const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const uploadRouter = require("./upload-routes")
const dotenv = require("dotenv")
const app = express()

dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(
  cors({
    origin: "*",
  })
)
app.use(express.json())
app.use("/", uploadRouter)

app.listen(5000, () => {
  console.info("Server is up")
})
