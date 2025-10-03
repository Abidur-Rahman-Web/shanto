//! Pin This Code always used
/* export const BrandListService = async () => {
  try {
    let data = await BrandModels.find();
    return { status: "success", data: data };
  } catch (err) {
    return { status: "error", message: err.message };
  }
};*/

import mongoose from "mongoose";
import BrandModels from "../models/BrandModel.js";

// export const ListByFilterService = async () => {};

export const BrandListService = async () => {
  try {
    let data = await BrandModels.find();
    return { status: "success", data: data };
  } catch (err) {
    return { status: "error", message: err.message };
  }
};
// export const ProductByBrandService = async () => {
//   try {
//     let data = await BrandModels.find();
//     return { status: "success", data: data };
//   } catch (err) {
//     return { status: "error", message: err.message };
//   }
// };

// export const ListyByBrandService = async () => {};

// export const CategoryListService = async () => {};
// export const ListByCategoryService = async () => {};

// export const SliderListService = async () => {};

// export const CreateReviewService = async () => {};
// export const ReviewListService = async () => {};

// export const ListByRemarkService = async () => {};

// export const ListBySmilierService = async () => {};
// export const ListByKeywordService = async () => {};
// export const DetailsService = async () => {};

// export const ListBySortService = async () => {}; //*

// // export const ListBySliderService = async () => {};
