import joi from 'joi';

export const loginSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().required(),
});

export const signUpSchema = joi.object({
	name: joi.string().required(),
	email: joi.string().email().required(),
	password: joi.string().required(),
});