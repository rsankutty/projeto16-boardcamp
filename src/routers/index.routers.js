import { Router } from "express";
import customersRouter from "./customers.routers.js";
import gamesRouter from "./games.routers.js";
import rentalsRouter from "./rentals.routers.js";

const router = Router();

router.use(customersRouter);
router.use(gamesRouter);
router.use(rentalsRouter);



export default router;