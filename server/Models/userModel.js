const mongoose = require("mongoose");

const userScehema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        H_password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("user", userScehema);

module.exports = User;
