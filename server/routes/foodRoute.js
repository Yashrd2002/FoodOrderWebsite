import express from "express";
import {
  addFood,
  addFoodCategory,
  getFoods,
  removeFood,
  getFoodCategory,
  removeFoodCategory
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// image storage
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.post("/addCategory", upload.single("image"), addFoodCategory);
foodRouter.get("/getCategory", getFoodCategory);
foodRouter.post("/removeCategory", removeFoodCategory);

foodRouter.get("/list", getFoods);
foodRouter.post("/remove", removeFood);

export default foodRouter;
