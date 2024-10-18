import { Router } from "express";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import serviceRoutes from "./serviceRoutes";
import serviceProviderRoutes from "./serviceProviderRoutes";
import locationRoutes from "./locationRoutes";
import ordersRoutes from "./ordersRoutes";
import customerRoutes from "./customerRoutes";
import paymentRoutes from "./paymentRoutes";
import serviceTypeRoutes from "./serviceTypeRoutes";
import serviceImageRoutes from "./serviceImageRoutes";
import promotionRoutes from "./promotionRoutes";
import menuRoutes from "./menuRoutes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/service", serviceRoutes);
router.use("/service-providers", serviceProviderRoutes);
router.use("/locations", locationRoutes);
router.use("/orders", ordersRoutes);
router.use("/customers", customerRoutes);
router.use("/payments", paymentRoutes);
router.use("/service-types", serviceTypeRoutes);
router.use("/service-images", serviceImageRoutes);
router.use("/promotions", promotionRoutes);
router.use("/menus", menuRoutes);

export default router;