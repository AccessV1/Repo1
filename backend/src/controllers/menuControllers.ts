import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { Menus } from "../models/Menu";

export const createMenu = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body;
  const newMenu = await Menus.create(data);
  res.status(201).json(newMenu);
});

export const getMenuById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const menu = await Menus.findById(id);
  if (menu) {
    res.json(menu);
  } else {
    res.status(404).json({ message: "Menu not found" });
  }
});

// Add more controller methods as needed