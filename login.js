const User = require('./models/user.models');
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

        return res.status(200).json({ token: token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const createJwtToken = (userId) => {
    const payload = {
        userId,
        iat: Date.now(),
    };

    return jwt.sign(payload, process.env.JWT_TOKEN_SECRET_KEY, {
        expiresIn: "24h",
    });
}

exports.login = login;

const createAccount = async (req, res) => {
    try {
        const createdItem = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        console.log("1 document inserted:", createdItem);

        if (!res.status(200)) {
            return res.status(500).json({message: `creat user failed: ${res.status}`});
        }
        const token = createJwtToken(createdItem._id);

        if (!token) {
            return res.status(500).json({ error: "Internal server error" });
        }

        return res.status(200).json({ token: token });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to insert item" });
    }
}

exports.createAccount = createAccount;