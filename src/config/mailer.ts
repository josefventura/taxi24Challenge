import nodemailer = require('nodemailer');


export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, //only true for 465 port
    auth:{
        user: 'josuelvent@gmail.com',
        pass: process.env.API_MAIL_PASSWORD
    }
    // service: 'gmail',
    // auth: {
    //     user: 'josuelvent@gmail.com',
    //     pass: process.env.PASSWORD
    
    // }
});

transporter.verify().then(
    ()=>{
        console.log('ready send email')
    }
)