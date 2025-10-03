// import EmailSend from "../utility/emailSend.js";
// import UserModel from "../models/UserModel.js";
// import profileModel from "../models/ProfileModel.js";

// import { EncodeToken } from "../utility/tokenUtils.js";

const UserOTPServices = async (req) => {
//   try {
//     let email = req.params.email;
//     let code = Math.floor(100000 + Math.random() * 900000);
//     let EmailText = `Your OTP is ${code}`;
//     let EmailSubject = "OTP Verification";
//     await EmailSend(email, EmailText, EmailSubject);
//     await UserModel.updateOne(
//       { email },
//       { $set: { otp: code } },
//       { upsert: true }
//     );
//     return { status: "success", message: "OTP sent successfully" };
//   } catch (err) {
//     return { status: "error", message: err.message };
//   }
};
const verifyOTPServices = async (req) => {
  //   try {
  //     let email = req.body.email;
  //     let otp = req.body.otp;
  //     let user = await UserModel.findOne({ email });
  //     if (user) {
  //       if (user.otp == otp) {
  //         user.otp = null;
  //         user.save();
  //         return { status: "success", message: "OTP verified successfully" };
  //       } else {
  //         return { status: "error", message: "Invalid OTP" };
  //       }
  //     } else {
  //       return { status: "error", message: "User not found" };
  //     }
  //   } catch (error) {
  //     return { status: "error", message: error.message };
  //   }
};
const SaveProfleService = async (req) => {
  //   try {
  //     let profile = await profileModel.create(req.body);
  //     return {status: "success", data: profile};
  //   } catch (error) {
  //     return {status: "error", message: error.message};
  //   }
};
const ReadProfileService = async () => {
  //   try {
  //     let profile = await profileModel.find();
  //     return {status: "success", data: profile};
  //   } catch (error) {
  //     return {status: "error", message: error.message};
  //   }
};
