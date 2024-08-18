import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  Navbarlogo: {
    type: String,
    required: true,
  },
  HeroImage: {
    type: String,
    required: true,
  },
  HeroTitle: {
    type: String,
    required: true,
  },
  HeroDesc: {
    type: String,
    required: true,
  },
  ContactNo: {
    type: String,
    required: true,
  },
  ContactEmail: {
    type: String,
    required: true,
  },
  SocialFacebook: {
    type: String,
    required: true,
  },
  SocialTwitter: {
    type: String,
    required: true,
  },
  SocialInstagram: {
    type: String,
    required: true,
  },
  ColorTheme: {
    type: String,
    required: true,
  },
});

const contentModel =
  mongoose.models.content || mongoose.model("content", contentSchema);
// check if model already exists if not create new one
export default contentModel;
