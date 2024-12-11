import Joi from "joi";

export const createBarberValidation = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    address: Joi.string().required(),
    aadhar: Joi.string()
        .length(12)
        .pattern(/^\d{12}$/)
        .required(),
    phone: Joi.string()
        .length(10)
        .pattern(/^\d{10}$/)
        .required(),
    password: Joi.string().required(),
    photo: Joi.string().optional(),
    salary: Joi.number().required(),
});

export const updateBarberValidation = Joi.object({
    name: Joi.string().optional(),
    age: Joi.number().optional(),
    address: Joi.string().optional(),
    aadhar: Joi.string()
        .length(12)
        .pattern(/^\d{12}$/)
        .optional(),
    phone: Joi.string()
        .length(10)
        .pattern(/^\d{10}$/)
        .optional(),
    password: Joi.string().optional(),
    photo: Joi.string().optional(),
    salary: Joi.number().optional(),
});
