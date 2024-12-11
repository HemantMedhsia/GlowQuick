import jwt from "jsonwebtoken";

export const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user._id, name: user.name },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: "7d",
        }
    );
};
