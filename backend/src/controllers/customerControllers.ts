import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { Customers } from "../models/Customer";

export const createCustomer = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body;
  const newCustomer = await Customers.create(data);
  res.status(201).json(newCustomer);
});

export const getCustomerById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = await Customers.findById(id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

// Add more controller methods as needed