import express from "express";
import {
    createBarber,
    deleteBarber,
    getAllBarbers,
    getBarberById,
    loginBarber,
    newRefreshToken,
    updateBarber,
} from "../Controller/barber.Controller.js";
import upload from "../Utils/multerConfig.js";

const router = express.Router();

router.post("/create-barber", upload.single("img"), createBarber);
router.get("/get-all-barbers", getAllBarbers);
router.get("/get-barber-by-id/:id", getBarberById);
router.put("/update-barber/:id", upload.single("img"), updateBarber);
router.delete("/delete-barber/:id", deleteBarber);
router.post("/barber-login", loginBarber);
router.post("/new-access-token", newRefreshToken);

export { router as barberRoutes };
