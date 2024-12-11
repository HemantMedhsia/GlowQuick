import Service from "../Models/Service.Model.js";
import cloudinary from "../Utils/cloudinaryConfig.js";
import { ApiError } from "../Utils/errorHandler.js";
import { ApiResponse } from "../Utils/responseHandler.js";
import wrapAsync from "../Utils/wrapAsync.js";
import {
    createServiceValidation,
    updateServiceValidation,
} from "../Validations/service.Validation.js";

export const createService = wrapAsync(async (req, res, next) => {
    const { error } = createServiceValidation.validate(req.body);

    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }
    const {
        serviceName,
        basicPlan,
        premimumPlan,
        serviceDescription,
        serviceDuration,
    } = req.body;

    const serviceImage = req.file ? req.file.path : null;

    const service = new Service({
        serviceName,
        basicPlan,
        premimumPlan,
        serviceDescription,
        serviceDuration,
        serviceImage,
    });

    await service.save();

    return res
        .status(201)
        .json(new ApiResponse(201, service, "Service created successfully"));
});

export const getAllServices = wrapAsync(async (req, res, next) => {
    const services = await Service.find();

    return res.status(200).json(new ApiResponse(200, services, "All Services"));
});

export const getSingleService = wrapAsync(async (req, res, next) => {
    const service = await Service.findById(req.params.id);

    if (!service) {
        return next(new ApiError(404, "Service not found"));
    }
    return res.status(200).json(new ApiResponse(200, service, "Service"));
});

export const updateService = wrapAsync(async (req, res, next) => {
    const {
        serviceName,
        basicPlan,
        premimumPlan,
        serviceDescription,
        serviceDuration,
    } = req.body;

    const serviceImage = req.file ? req.file.path : null;

    const updateData = {
        serviceName,
        basicPlan,
        premimumPlan,
        serviceDescription,
        serviceDuration,
    };

    const { error } = updateServiceValidation.validate(updateData);

    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }

    if (serviceImage) {
        updateData.serviceImage = serviceImage;
    }

    const service = await Service.findByIdAndUpdate(req.params.id, updateData, {
        new: true,
        runValidators: true,
    });

    if (!service) {
        return next(new ApiError(404, "Service not found"));
    }

    return res
        .status(200)
        .json(new ApiResponse(200, service, "Service updated successfully"));
});

export const deleteService = wrapAsync(async (req, res, next) => {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
        return next(new ApiError(404, "Service not found"));
    }

    if (service.serviceImage) {
        const photoUrl = service.serviceImage;
        const publicId = photoUrl.split("/").slice(-2).join("/").split(".")[0];

        try {
            await cloudinary.uploader.destroy(publicId);
        } catch (error) {
            return next(new ApiError(400, "Error in deleting image"));
        }
    }

    return res
        .status(200)
        .json(new ApiResponse(200, service, "Service deleted successfully"));
});
