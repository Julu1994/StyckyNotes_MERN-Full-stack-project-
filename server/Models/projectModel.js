const mongoose = require("mongoose");
const id = mongoose.Schema.Types.ObjectId;

const myScema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        name: {
            type: String,
        },
        //Authentication
        user: {
            type: id,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Model = mongoose.model("model", myScema);

module.exports = Model;
