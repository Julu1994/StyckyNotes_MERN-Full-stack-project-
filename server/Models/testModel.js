const mongoose = require("mongoose");

const testScehema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Test = mongoose.model("test", testScehema);

module.exports = Test;
