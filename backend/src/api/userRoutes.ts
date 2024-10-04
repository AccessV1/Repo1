import { Router } from "express";
import { getUser } from "../controllers/authControllers";

const router = Router();

router.get("/user", getUser);

export default router;
