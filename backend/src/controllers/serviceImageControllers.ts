import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ServiceImage } from "../models/ServiceImages";

export const createServiceImage = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body;
  const newServiceImage = await ServiceImage.create(data);
  res.status(201).json(newServiceImage);
});

export const getServiceImageById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const serviceImage = await ServiceImage.findById(id);
  if (serviceImage) {
    res.json(serviceImage);
  } else {
    res.status(404).json({ message: "Service Image not found" });
  }
});

// Add more controller methods as needed