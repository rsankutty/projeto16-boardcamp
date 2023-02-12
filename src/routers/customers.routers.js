import { Router } from "express";
import { registerCustomer, listCustomers, getCustomerById,updateCustomer } from "../controllers/customers.controllers.js";
import { validateSchema } from "../middlewares/validadeSchema.middleware.js";
import { customersSchema } from "../models/customers.model.js";


const customersRouter = Router()

customersRouter.get('/customers', listCustomers)

customersRouter.get('/customers/:id', getCustomerById)

customersRouter.post('/customers',validateSchema(customersSchema), registerCustomer)

customersRouter.put('/customers/:id',validateSchema(customersSchema), updateCustomer)

export default customersRouter