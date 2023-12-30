const mongoose = require("mongoose");
const User = mongoose.model(
    "User",
    new
        mongoose.Schema({
            username: String,
            mail: String,
            phone: String,
            password: String,
            roles: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Role"
                }
            ]
        })
);
module.exports = User;
