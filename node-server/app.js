"use strict"
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const uploadRouter = require("./upload-routes")
const dotenv = require("dotenv")
const helmet = require("helmet")
const app = express()

dotenv.config()
const port = 5000
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(
  cors({
    origin: "*",
  })
)
app.use(express.json())
app.use("/", uploadRouter)

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`)
})
