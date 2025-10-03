import * as UserServices from "../services/UserServices.js";
// import * as EmailServices from "../services/EmailServices.js";

export const UserOTP = async (req, res) => {
//   try {
//     // URL থেকে email নেওয়া
//     const email = req.params.email;

//     // Random 6-digit OTP generate করা
//     const otp = Math.floor(100000 + Math.random() * 900000);

//     // এখানে তুমি চাইলে DB তে save করতে পারো
//     // অথবা cache / Redis / temp collection ব্যবহার করতে পারো
//     // উদাহরণস্বরূপ DB তে OTP save:
//     // await OTPModel.create({ email: email, otp: otp });

//     // এখন Response পাঠাও
//     res.status(200).json({
//       status: "success",
//       message: `OTP sent successfully to ${email}`,
//       otp: otp, // 👉 ডেভেলপমেন্টে দেখানোর জন্য, production এ client কে পাঠাবে না
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "error",
//       message: err.message,
//     });
//   }
};
