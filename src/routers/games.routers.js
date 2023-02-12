import { Router } from "express";
import { listGames, registerGame } from "../controllers/games.controllers.js";
import { gamesSchema } from "../models/games.model.js"
import { validateSchema } from "../middlewares/validadeSchema.middleware.js";

const gamesRouter = Router()

gamesRouter.get('/games', listGames)
gamesRouter.post('/games',validateSchema(gamesSchema), registerGame)

export default gamesRouter

