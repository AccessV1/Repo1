import { Router } from "express";
import { createService, getServiceById } from "../controllers/serviceControllers";

const router = Router();

router.post("/", createService);
router.get("/:id", getServiceById);

// When future methods are added, add them here

export default router;