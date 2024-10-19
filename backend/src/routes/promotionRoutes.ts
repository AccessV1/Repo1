import { Router } from "express";
import { createPromotion, getPromotionById } from "../controllers/promotionControllers";

const router = Router();

router.post("/", createPromotion);
router.get("/:id", getPromotionById);

// Add more routes as needed

export default router;