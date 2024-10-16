import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  googleCallback,
  facebookCallback,
  sendPhoneNumberVerificationCode,
  VerifyPhoneNumberCode,
  isPhoneNumberLinkedToUser,
} from "../controllers/authControllers";
import passport from "../utils/passport";

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/logout", logoutUser);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallback
);

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { session: false }),
  facebookCallback
);

router.post("/sendVerificationCode", sendPhoneNumberVerificationCode);
router.post("/verifyPhoneNumberCode", VerifyPhoneNumberCode);
router.get(
  "/isPhoneNumberLinkedToUser/:phoneNumber",
  isPhoneNumberLinkedToUser
);
export default router;
