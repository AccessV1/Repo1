import { Router } from "express";
import { createCustomer, getCustomerById } from "../controllers/customerControllers";

const router = Router();

router.post("/", createCustomer);
router.get("/:id", getCustomerById);

// Add more routes as needed

export default router;