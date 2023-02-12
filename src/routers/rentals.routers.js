import { Router } from "express";
import { listRentals, registerRental,closeRental,deleteRental} from "../controllers/rentals.controllers.js";
import { validateSchema } from "../middlewares/validadeSchema.middleware.js";
import { rentalSchema } from "../models/rentals.model.js";

const rentalsRouter = Router()

rentalsRouter.get('/rentals', listRentals)

rentalsRouter.post('/rentals',validateSchema(rentalSchema), registerRental)

rentalsRouter.post('/rentals/:id/return', closeRental)

rentalsRouter.delete('/rentals/:id', deleteRental)

export default rentalsRouter