import { Router } from "express";
import { createLocation, getLocationById } from "../controllers/locationControllers";

const router = Router();

router.post("/", createLocation);
router.get("/:id", getLocationById);

// Add more routes as needed

export default router;