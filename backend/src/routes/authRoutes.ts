import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  sendPhoneNumberVerificationCode,
  VerifyPhoneNumberCode,
isPhoneNumberLinkedToUser,
} from "../controllers/authControllers";

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/logout", logoutUser);
router.post("/sendVerificationCode", sendPhoneNumberVerificationCode);
router.post("/verifyPhoneNumberCode", VerifyPhoneNumberCode);
router.post("isPhoneNumberLinkedToUser", isPhoneNumberLinkedToUser);
export default router;
