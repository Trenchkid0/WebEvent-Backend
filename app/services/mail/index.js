const nodemailer = require('nodemailer');
const Mustache = require('mustache');
const { gmail, password } = require('../../config');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: gmail,
    pass: password,
  },
});


const otpMail = async (email, data) => {
  try {
    let template = fs.readFileSync('app/views/email/otp.html', 'utf8');

    let message = {
      from: gmail,
      to: email,
      subject: 'Otp for registration is: ',
      html: Mustache.render(template, data),
    };
    
    return await transporter.sendMail(message);

  } catch (ex) {
    console.log(ex);
  }
};

const checkoutMail = async (email,historyEvent) => {
  try {
    let template = fs.readFileSync('app/views/email/checkout.html', 'utf8');

    let message = {
      from: gmail,
      to: email,
      subject: 'This is your receipt: ',
      html: Mustache.render(template,historyEvent),
    };
    
    return await transporter.sendMail(message);

  } catch (ex) {
    console.log(ex);
  }
};


module.exports = { otpMail,
  checkoutMail 
};
