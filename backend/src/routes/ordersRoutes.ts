import { Router } from "express";
import { createOrder, getOrderById } from "../controllers/ordersControllers";

const router = Router();

router.post("/", createOrder);
router.get("/:id", getOrderById);

// Add more routes as needed

export default router;