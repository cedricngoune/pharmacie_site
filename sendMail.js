const nodemailer = require("nodemailer")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const multer = require("multer")
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.json())

var myStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/uploads')
    },
    filename: (req, file, callback) =>{
        callback(null, file.originalname)
    }
}) 

var upload = multer({
    storage: myStorage
}).single('path') 
//var upload = multer().single('path')

app.post('/send', (req, res) => {
    
    upload(req, res, (err) => {
        if(err){
            console.log(err.message)
            res.json({
                error: true,
                message: err.message
            })
        }else {
            var to = req.body.to
            var subject = req.body.subject
            var path = req.file.path
            console.log(path)

            // handle of sending email

            let transport = {
                service: 'gmail',
                auth: {
                    user: 'ngounecedric237@gmail.com',
                    pass: "zxreeyqvdhhgaymf"
                }
            }
            let mail = nodemailer.createTransport(transport)
            let mailOptions = {
                from: "gabyngoune@yahoo.fr",
                to: to,
                subject: "depot d'ordonnance",
                attachments:[
                    {path: path}
                ]
            }
            mail.sendMail(mailOptions, (err, info) => {
                if(err) {
                   res.send(
                    {
                        err: 'Something wrong happened',
                        code: err.message
                    }
                    )
                }else {
                    console.log("Email sent :", info.response)
                    
                }   
            })
            res.send({
                message: "Email sent"
            })
        }
        
    })    
})

app.listen(5000, () => {
    console.log("Server is up")
})