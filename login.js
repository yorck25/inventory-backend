const User = require('./models/user.models');
const jwtDecode = require("jwt-decode");
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { username, password } = req.headers;

        if (!username || !password) {
            return res.status(400).json({ error: "Username or password not provided in headers" });
        }

        const user = await User.findOne({ username, password });

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        const token = createJwtToken(user._id);

        if (!token) {
            return res.status(500).json({ error: "Internal server error" });
        }

        return res.status(200).json(token);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

createJwtToken = (userId) => {
    const payload = {
        userId,
        iat: Date.now(),
    };

    return jwt.sign(payload, process.env.JWT_TOKEN_SECRET_KEY, {
        expiresIn: '24h',
    });
}

exports.login = login;