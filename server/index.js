const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const parsCookie = require("cookie-parser");


dotenv.config();


const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(parsCookie());

app.use("/routers", require("./Router/routers"));
app.use("/auth", require("./Router/userRouter"));
app.use("/reg", require("./Router/test"))

app.listen(4000, () => {
    console.log("Server is up and runnning");
});

mongoose.connect(process.env.MONGODB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}, (err) => {
    if (err) return console.error(err);
    console.log("Succcessfully connected to MongoDB")
}); 