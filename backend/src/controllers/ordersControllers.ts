import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { Order } from "../models/Orders";

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body;
  const newOrder = await Order.create(data);
  res.status(201).json(newOrder);
});

export const getOrderById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const order = await Order.findById(id);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
});

// Add more controller methods as needed