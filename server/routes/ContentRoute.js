import express from "express";

import multer from "multer";
import { addContent, getContent } from "../controllers/ContentController.js";


const ContentRouter = express.Router();

// image storage
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

ContentRouter.post("/addcontent", upload.fields([{ name: 'Navbarlogo', maxCount: 1 }, { name: 'HeroImage', maxCount: 1 }]), addContent);
ContentRouter.get("/getcontent",  getContent);


export default ContentRouter;
