import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { Locations } from "../models/Location";

export const createLocation = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body;
  const newLocation = await Locations.create(data);
  res.status(201).json(newLocation);
});

export const getLocationById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const location = await Locations.findById(id);
  if (location) {
    res.json(location);
  } else {
    res.status(404).json({ message: "Location not found" });
  }
});

// Add more controller methods as needed