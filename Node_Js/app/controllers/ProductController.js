//! Pin This Code always used
/*export const BrandModelList = async (req, res) => {
  let result = await ProductServices.BrandListService();
  return res.status(200).json(result);
};*/

import { BrandListService } from "../services/ProductServices.js";
// import ProductServices from "../services/ProductServices.js";
export const BrandModelList = async (req, res) => {
  let result = await BrandListService();
  if (result.status === "error") {
    return res.status(501).json(result); // error হলে 500
  }

  return res.status(200).json(result); // success হলে 200
};
// export const ProductListByBrand = async (req, res) => {
//   try {
//     let data = await ProductServices.ProductByBrandService();
//     retrun = res.status(200).json(data);
//   } catch (err) {
//     return res.status(500).json({ status: "error", message: err.message });
//   }
// };

// export const ProductCategoryList = async (req, res) => {};
// export const ProductSliderList = async (req, res) => {};

// export const ProductListByCategory = async (req, res) => {};
// export const ProductListBySlider = async (req, res) => {};

// export const ProductListBySmilier = async (req, res) => {};

// export const ProductListByKeyword = async (req, res) => {};
// export const ProductListByRemark = async (req, res) => {};
// export const ProductListByFilter = async (req, res) => {};
// export const ProductListBySort = async (req, res) => {}; //*?! ata ami try korbo

// export const ProductDetails = async (req, res) => {};
// export const ProductReviewList = async (req, res) => {};
// export const CreateReview = async (req, res) => {};
