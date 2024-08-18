import foodModel from "../models/FoodModel.js";
import CategoryModel from "../models/CategoryModel.js";
import fs from "fs";

// Add Food

const addFood = async (req, res) => {
  try {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_filename,
      category: req.body.category,
    });

    await food.save();

    res
      .status(201)
      .json({ success: true, message: "Food added successfully", data: food });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};
const addFoodCategory = async (req, res) => {
  try {
    let image_filename = `${req.file.filename}`;

    const food = new CategoryModel({
      image: image_filename,
      category: req.body.category,
    });

    await food.save();

    res
      .status(201)
      .json({ success: true, message: "Food Category added successfully", data: food });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};
const getFoodCategory = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});
    res.status(201).json({ success: true, data: categories });
} catch (error) {

    res.status(409).json({ success: false, message: error.message });
}
};
const removeFoodCategory = async (req, res) => {
  try {
    const food = await CategoryModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await CategoryModel.findByIdAndDelete(req.body.id);
    res
      .status(201)
      .json({ success: true, message: "Category removed successfully" });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};

// Get All Food

const getFoods = async (req, res) => {
  try {
    const food = await foodModel.find({});

    res.status(201).json({ success: true, data: food });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};

// Remove Food

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res
      .status(201)
      .json({ success: true, message: "Food removed successfully" });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export { addFood, getFoods, removeFood,addFoodCategory,getFoodCategory,removeFoodCategory };
