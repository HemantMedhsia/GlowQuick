import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user._id, name: user.name },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "1d",
        }
    );
};
