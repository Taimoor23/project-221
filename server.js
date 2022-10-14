const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodeMailer=require('nodeMailer');
const { info } = require("console");
const transporter=nodeMailer.createTransport({
    port:465,
    host:'smtp.gmail.com',
    auth:{
        user:'mtaskbajwa@gmail.com',
        pass:'kbzhnclcwjpbovzq'
    },
    secure:true,
})

server.listen(process.env.PORT || 3030);