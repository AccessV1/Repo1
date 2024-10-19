import { Router } from "express";
import { createPayment, getPaymentById } from "../controllers/paymentControllers";

const router = Router();

router.post("/", createPayment);
router.get("/:id", getPaymentById);

// Add more routes as needed

export default router;