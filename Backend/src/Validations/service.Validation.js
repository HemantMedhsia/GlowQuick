import Joi from "joi";

export const createServiceValidation = Joi.object({
    serviceName: Joi.string().required(),
    basicPlan: Joi.number().required(),
    premimumPlan: Joi.number().optional(),
    serviceDescription: Joi.string().required(),
    serviceDuration: Joi.number().required(),
    serviceImage: Joi.string().optional(),
});

export const updateServiceValidation = Joi.object({
    serviceName: Joi.string().optional(),
    basicPlan: Joi.number().optional(),
    premimumPlan: Joi.number().optional(),
    serviceDescription: Joi.string().optional(),
    serviceDuration: Joi.number().optional(),
    serviceImage: Joi.string().optional(),
});
