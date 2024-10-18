import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ServiceType } from "../models/ServiceTypes";

export const createServiceType = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body;
  const newServiceType = await ServiceType.create(data);
  res.status(201).json(newServiceType);
});

export const getServiceTypeById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const serviceType = await ServiceType.findById(id);
  if (serviceType) {
    res.json(serviceType);
  } else {
    res.status(404).json({ message: "Service Type not found" });
  }
});

// Add more controller methods as needed