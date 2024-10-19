import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { Payments } from "../models/Payment";

export const createPayment = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body;
  const newPayment = await Payments.create(data);
  res.status(201).json(newPayment);
});

export const getPaymentById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payment = await Payments.findById(id);
  if (payment) {
    res.json(payment);
  } else {
    res.status(404).json({ message: "Payment not found" });
  }
});

// Add more controller methods as needed