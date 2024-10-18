import { Router } from "express";
import { createServiceProvider, getServiceProviderById } from "../controllers/serviceProviderControllers";

const router = Router();

router.post("/", createServiceProvider);
router.get("/:id", getServiceProviderById);

// Add more routes as needed

export default router;