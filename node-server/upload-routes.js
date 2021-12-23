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

      try {
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
        mail.sendMail(mailOptions, async (err, info) => {
          if (err) {
            return res.send({
              err: "Une erreur s'est produite",
              code: 400,
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
        return res.status(200).json({
          message: "Email envoyé!",
          statusText: "success",
        })
      } catch (error) {
        console.log(error)
        res.json({
          errorMsg: error.message,
          statusText: "failed",
        })
      }
    }
  })
})

module.exports = router
