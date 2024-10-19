import { Router } from "express";
import { createServiceType, getServiceTypeById } from "../controllers/serviceTypeControllers";

const router = Router();

router.post("/", createServiceType);
router.get("/:id", getServiceTypeById);

// Add more routes as needed

export default router;