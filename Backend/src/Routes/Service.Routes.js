import express from "express";
import {
    createService,
    deleteService,
    getAllServices,
    getSingleService,
    updateService,
} from "../Controller/Service.Controller.js";
import upload from "../Utils/multerConfig.js";

const router = express.Router();

router.post("/create-service", upload.single("img"), createService);
router.get("/get-all-services", getAllServices);
router.get("/get-service-by-id/:id", getSingleService);
router.put("/update-service/:id", upload.single("img"), updateService);
router.delete("/delete-service/:id", deleteService);

export { router as serviceRoutes };
