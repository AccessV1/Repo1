import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../controllers/authControllers";

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/logout", logoutUser);

export default router;
