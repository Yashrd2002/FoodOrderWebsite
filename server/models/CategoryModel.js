import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const CategoryModel = mongoose.models.Category || mongoose.model("Category", CategorySchema);
// check if model already exists if not create new one
export default CategoryModel;
