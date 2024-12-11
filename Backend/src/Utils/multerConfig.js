// multerConfig.js
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinaryConfig.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "SalonImages", 
    format: async (req, file) => file.mimetype.split("/")[1], 
    public_id: (req, file) => file.originalname.split(".")[0], 
  },
});

const upload = multer({ storage: storage });

export default upload;
