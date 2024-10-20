import { Router } from "express";
import { createService, getServiceById, searchForServices } from "../controllers/serviceControllers";

const router = Router();

router.post("/", createService);
router.get("/:id", getServiceById);
// When future methods are added, add them here
router.get("/search", searchForServices);
export default router;