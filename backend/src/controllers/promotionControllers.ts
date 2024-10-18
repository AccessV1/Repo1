import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { Promotion } from "../models/Promotions";

export const createPromotion = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body;
  const newPromotion = await Promotion.create(data);
  res.status(201).json(newPromotion);
});

export const getPromotionById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const promotion = await Promotion.findById(id);
  if (promotion) {
    res.json(promotion);
  } else {
    res.status(404).json({ message: "Promotion not found" });
  }
});

// Add more controller methods as needed