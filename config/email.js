require('dotenv').config();
const nodemailer = require('nodemailer');
const { secret } = require('./secret');

// sendEmail function
module.exports.sendEmail = async (body) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: secret.email_host,
      service: secret.email_service, // Comment this line if using a custom SMTP server
      port: secret.email_port,
      secure: true,
      auth: {
        user: secret.email_user,
        pass: secret.email_pass,
      },
    });

    // Send email
    transporter.sendMail(body, (err, info) => {
      if (err) {
        console.error("Error sending email:", err.message);
        reject(new Error(`Error sending email: ${err.message}`));
      } else {
        console.log("Email sent successfully:", info.response);
        resolve("Please check your email to reset your password!");
      }
    });
  });
};
