import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ServiceProviders } from "../models/ServiceProvider";

export const createServiceProvider = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body;
  const newProvider = await ServiceProviders.create(data);
  res.status(201).json(newProvider);
});

export const getServiceProviderById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const provider = await ServiceProviders.findById(id);
  if (provider) {
    res.json(provider);
  } else {
    res.status(404).json({ message: "Service Provider not found" });
  }
});

// Add more controller methods as needed