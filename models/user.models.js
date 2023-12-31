const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true // Ensures uniqueness of usernames
    },
    password: {
        type: String,
        required: true
    },
    // You can add more fields as needed for your user data
    // For instance:
    email: {
        type: String,
        required: true,
        unique: true // Ensures uniqueness of email addresses
    },
    // Additional fields...
});

const User = mongoose.model('User', userSchema);

module.exports = User;
