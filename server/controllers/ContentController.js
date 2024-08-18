
import fs from "fs";

import contentModel from "../models/ContentModel.js";

// Add Food


const addContent = async (req, res) => {

  try {
    let Navbarlogo = req.files.Navbarlogo && req.files.Navbarlogo[0].filename;
    let HeroImage = req.files.HeroImage && req.files.HeroImage[0].filename;

    const contentData = {
      Navbarlogo: Navbarlogo,
      HeroImage: HeroImage,
      HeroTitle: req.body.HeroTitle,
      HeroDesc: req.body.HeroDesc,
      ContactNo: req.body.ContactNo,
      ContactEmail: req.body.ContactEmail,
      SocialFacebook: req.body.SocialFacebook,
      SocialTwitter: req.body.SocialTwitter,
      SocialInstagram: req.body.SocialInstagram,
      ColorTheme:req.body.ColorTheme
    };

    const content = await contentModel.findOneAndUpdate(
      {},
      contentData,
      { new: true, upsert: true }
    );

    res.status(201).json({ success: true, message: "Content added/updated successfully", data: content });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};
const getContent = async (req, res) => {
  try {
    const content = await contentModel.find({});
    res.status(201).json({ success: true, data: content });
} catch (error) {

    res.status(409).json({ success: false, message: error.message });
}
};

export { addContent,getContent };
