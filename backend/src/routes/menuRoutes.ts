import { Router } from "express";
import { createMenu, getMenuById } from "../controllers/menuControllers";

const router = Router();

router.post("/", createMenu);
router.get("/:id", getMenuById);

// Add more routes as needed

export default router;