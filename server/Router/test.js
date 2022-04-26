const route = require("express").Router();
const Test = require("../Models/testModel");

route.post("/",(req, res) => {
    const post = new Test({
        email: req.body.email,
        password: req.body.password
    })
    post.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({ mess: "error happend"})

    });


});


module.exports = route;