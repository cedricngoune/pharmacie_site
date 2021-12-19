const express = require("express")
const router = express.Router()
const nodemailer = require("nodemailer")
const fileUploadController = require("./upload-controller")
const fs = require("fs")
const date = new Date()

router.post("/send", (req, res, next) => {
  fileUploadController(req, res, async (error) => {
    if (error) {
      console.log(error)
      return res.send({
        errorMsg: "Missing file",
      })
    } else {
      const {
        body: { email: from, fullname: subject },
        file: { path },
      } = req
      const mail = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.user_email,
          pass: "zxreeyqvdhhgaymf",
        },
      })
      const mailOptions = {
        from,
        to: process.env.recipient,
        subject: `depot d'ordonnance (${subject})`,
        attachments: [{ path: path }],
      }
      try {
        mail.sendMail(mailOptions, async (err, info) => {
          if (err) {
            return response.send({
              err: "Something wrong happened",
              code: err.message,
            })
          } else {
            console.log(
              `Email sent 📤 by ${from} at ${date.getHours()}h:${date.getMinutes()}`
            )
            fs.unlink(path, (err) => {
              if (err) res.send({ err })
              console.log("file deleted")
            })
          }
        })
        return res.status(200).send({
          message: "Email envoyé!",
          statusText: "success",
        })
      } catch (error) {
        console.log(error)
        res.send({
          errorMsg: error.message,
          statusText: "failed",
        })
      }
    }
  })
})

module.exports = router
