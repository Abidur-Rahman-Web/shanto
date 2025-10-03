import express from "express";
// import * as taskController from "../app/controllers/taskController.js";
// import * as userController from "../app/controllers/userController.js";
// import { authMiddleware } from "../app/middlewares/authMiddleware.js";
const router = express.Router();
import * as ProductController from "../app/controllers/ProductController.js";
// import * as UserController from "../src/controllers/UserController.js";
// console.log(Object.keys(router));
// console.log(router);

// user before login
// router.post("/registration", userController.registration);
// router.post("/login", userController.login);
// router.get("/emailVerify", userController.emailVerify);
// router.get("/codeVerify", userController.codeVerify);
// router.post("/resetPassword", userController.resetPassword);

// // user after login
// router.get("/profileDetails", authMiddleware, userController.profileDetails);
// router.put("/profileUpdate", authMiddleware, userController.profileUpdate);

// // task after login
// router.post("/createTask", authMiddleware, taskController.createTask);
// router.get(
//   "/taskListByStatus",
//   authMiddleware,
//   taskController.taskListByStatus
// );
// router.get("/deleteTask", authMiddleware, taskController.deleteTask);
// router.get("/countTask", authMiddleware, taskController.countTask);
// router.patch(
//   "/updateTaskStatus/:task_id/:status",
//   authMiddleware,
//   taskController.updateTaskStatus
// );

// router.get("/feature1/TokenEncode", taskController.EncodedToken);
// router.get("/feature2/TokenDecode", taskController.DecodedToken);

//! Product List
router.get("/brands", ProductController.BrandModelList);
// router.get("/brands/:brandsId", ProductController.ProductListByBrand);
// router.get("/categories", ProductController.ProductCategoryList);
// router.get("/categories/:categories", ProductController.ProductListByCategory);
// router.get("smilier/:categories", ProductController.ProductListByCategory);
// router.get("/sliders", ProductController.ProductSliderList);
// router.get("/keyword/:keyword", ProductController.ProductListByKeyword);
// router.get("/remark/:remark", ProductController.ProductListByRemark);
// router.get("/productDetails/:productId", ProductController.ProductDetails);

//! User
// router.get("UserOTP/:email", UserController.UserOTP);

export { router };
