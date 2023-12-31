const User = require('./models/user.models'); // Import your User model

// Assuming your User model has fields like 'username' and 'password'

const login = async (req, res) => {
    try {
        const { username, password } = req.headers; // Retrieving username and password from headers

        // Check if the username and password are present in the headers
        if (!username || !password) {
            return res.status(400).json({ error: "Username or password not provided in headers" });
        }

        // Query the database to find the user
        const user = await User.findOne({ username, password }); // You might want to hash the password for security

        console.log(user);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const token = createJwtToken(user._id);

        if (!token) {
            return res.status(500).json({ error: "Internal server error" });
        }

        console.log(token);

        return res.status(200).json({ token});
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your-secret-key';

function createJwtToken(userId) {
    const payload = {
        userId,
        iat: Date.now(),
    };

    return jwt.sign(payload, SECRET_KEY, {
        expiresIn: '24h', // Expiration time in seconds
    });
}

exports.login = login;