import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split("")[1];

    if (!token) return res.status(403).json({ error: "Unauthorized request" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: "Unauthorized request" });

        req.user = user;
        next();
    });
}

export { authenticateToken };
