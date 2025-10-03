import { config, EMAIL_HOST, EMAIL_PORT } from "../config/config.js";
import nodemailer from "nodemailer";
const sendEmail = async (emailTo, emailText, emailSubject) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      secure: false,
      auth: {
        user: "api",
        pass: "<YOUR_API_TOKEN>",
        tls: {
          rejectUnauthorized: false,
        },
      },
    });
    let mailOption = {
      from: "MERN ECOMMERCE <your_email@example.com>",
      to: emailTo,
      subject: emailSubject,
      text: emailText,
    };
    return await transporter.sendMail(mailOption);
  } catch (err) {
    console.log(err);
  }
};
// import nodemailer from "nodemailer";
export default sendEmail;
