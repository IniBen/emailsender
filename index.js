const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`nodemailerapp is listening at http://localhost:${port}`)
})

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: process.env.OAUTH_ACCESS_TOKEN
    }
});

let mailOptions = {
    from: 'initechben@gmail.com',
    to: 'initechben@gmail.com',
    subject: 'Nodemailer App',
    text: 'This is nodemailer app, my zuri task'
}

transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });


    // app.listen(port, 
    //   () => console.log(`nodemailer app listening at http://localhost:${port}`))