import Barber from "../Models/Barber.model.js";
import wrapAsync from "../Utils/wrapAsync.js";
import { ApiResponse } from "../Utils/responseHandler.js";
import { ApiError } from "../Utils/errorHandler.js";
import jwt from "jsonwebtoken";
import {
    createBarberValidation,
    updateBarberValidation,
} from "../Validations/barber.Validation.js";
import { generateAccessToken } from "../Utils/generateAcessToken.js";
import { generateRefreshToken } from "../Utils/generateRefreshToken.js";
import cloudinary from "../Utils/cloudinaryConfig.js";

export const createBarber = wrapAsync(async (req, res, next) => {
    const { name, age, address, phone, aadhar, password, salary } = req.body;

    const { error } = createBarberValidation.validate(req.body);

    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }

    const barberExist = await Barber.findOne({ phone });

    if (barberExist) {
        return res
            .status(400)
            .json(
                new ApiResponse(
                    400,
                    null,
                    `Barber ${barberExist.name} already exists`
                )
            );
    }

    const photo = req.file ? req.file.path : null;

    const barber = new Barber({
        name,
        age,
        address,
        phone,
        aadhar,
        password,
        photo,
        salary,
    });

    await barber.save();

    return res
        .status(201)
        .json(new ApiResponse(201, barber, "Barber created successfully"));
});

export const getAllBarbers = wrapAsync(async (req, res, next) => {
    const barbers = await Barber.find();

    return res
        .status(200)
        .json(
            new ApiResponse(200, barbers, "All barbers fetched successfully")
        );
});

export const getBarberById = wrapAsync(async (req, res, next) => {
    const barber = await Barber.findById(req.params.id);

    if (!barber) {
        return next(new ApiError(404, "Barber not found"));
    }

    return res
        .status(200)
        .json(new ApiResponse(200, barber, "Barber fetched successfully"));
});

export const updateBarber = wrapAsync(async (req, res, next) => {
    const { name, age, address, phone, aadhar, password, salary } = req.body;
    const photo = req.file ? req.file.path : null;

    const updateData = {
        name,
        age,
        address,
        phone,
        aadhar,
        password,
        salary,
    };

    if (photo) {
        updateData.photo = photo;
    }
    const { error } = updateBarberValidation.validate(req.body);

    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }

    const barber = await Barber.findByIdAndUpdate(req.params.id, updateData, {
        new: true,
        runValidators: true,
    });

    if (!barber) {
        return next(new ApiError(404, "Barber not found"));
    }

    return res
        .status(200)
        .json(new ApiResponse(200, barber, "Barber updated successfully"));
});

export const deleteBarber = wrapAsync(async (req, res, next) => {
    const barber = await Barber.findByIdAndDelete(req.params.id);

    if (!barber) {
        return next(new ApiError(404, "Barber not found"));
    }

    if (barber.photo) {
        const photoUrl = barber.photo;
        const publicId = photoUrl.split("/").slice(-2).join("/").split(".")[0];

        try {
            await cloudinary.uploader.destroy(publicId);
        } catch (error) {
            return next(new ApiError(500, "Error in deleting photo"));
        }
    }

    return res
        .status(200)
        .json(new ApiResponse(200, barber, "Barber deleted successfully"));
});

const generateAccessAndRefreshTokens = async (
    barberId,
    options = { accessToken: true, refreshToken: true },
    next
) => {
    const barber = await Barber.findById(barberId);
    let accessToken = null;
    let refreshToken = null;

    if (options.accessToken) {
        accessToken = generateAccessToken(barber);
    }

    if (options.refreshToken) {
        refreshToken = generateRefreshToken(barber);
    }

    if (options.refreshToken && !refreshToken) {
        return next(new ApiError(500, "Refresh token not generated"));
    }

    if (options.accessToken && !accessToken) {
        return next(new ApiError(500, "Access token not generated"));
    }

    return { accessToken, refreshToken };
};

export const loginBarber = wrapAsync(async (req, res, next) => {
    const { phone, password } = req.body;

    const barber = await Barber.findOne({ phone });

    if (!barber) {
        return next(new ApiError(404, "Barber not found"));
    }

    const isPasswordValid = await barber.isValidatePassword(password);

    if (!isPasswordValid) {
        return next(new ApiError(400, "Invalid password"));
    }

    let { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
        barber._id,
        { accessToken: true, refreshToken: !barber.refreshToken },
        next
    );

    if (refreshToken) {
        barber.refreshToken = refreshToken;
        await barber.save();
    }

    if (!refreshToken) {
        refreshToken = barber.refreshToken;
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                { accessToken, refreshToken },
                "Barber logged in"
            )
        );
});

export const newRefreshToken = wrapAsync(async (req, res, next) => {
    const { newRefreshToken } = req.body;

    if (!newRefreshToken) {
        return next(new ApiError(401, "Unauthorized request"));
    }

    let decodeToken;

    try {
        decodeToken = jwt.verify(
            newRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );
    } catch (error) {
        return next(new ApiError(401, "Invalid refesh token"));
    }

    const barber = await Barber.findById(decodeToken?.id);

    if (!barber) {
        return next(new ApiError(401, "Invalid refesh token"));
    }

    if (newRefreshToken !== barber.refreshToken) {
        return next(new ApiError(401, "Refresh token is expired or used "));
    }

    const { accessToken } = await generateAccessAndRefreshTokens(
        barber._id,
        { accessToken: true, refreshToken: false },
        next
    );

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                { accessToken, newRefreshToken },
                "New access token generated"
            )
        );
});
