import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  googleCallback,
  facebookCallback,
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

export default router;
