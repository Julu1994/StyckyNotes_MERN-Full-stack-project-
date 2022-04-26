const express = require("express").Router();
const Model = require("../Models/projectModel");
const middleware1 = require("../Middlewares/middleware");


express.get("/", middleware1, async(req, res) => {
    try{
        const data = await Model.find({user: req.user});
        res.json(data);  

    } catch (error){
        res.status(400).json({errorMessage: "Sorry!!! not found your data"});

    }

});

//Delete method
express.delete("/:id",middleware1, async(req, res) => {
    try{
        const dataID = req.params.id 

        if(!dataID) 
        return res.status(400).json({errorMessage: "Sorry!!! not found anything to delete"});

        const existedData = await Model.findById(dataID);
        
        if (!existedData) 
        return res.status(400).json({errorMessage: "Sorry!!! not found anything to delete...."});

        if (existedData.user.toString() !== req.user)
        return res.status(404).json({errMessage: "Untothorised request"})

        await existedData.delete()
        res.json(existedData);

    } catch (error){
        res.status(500).json({errorMessage: "Sorry!!! not found your data"});

    }

});

//Updating data 
express.put("/:id", middleware1, async(req, res) => {
    try{
        const {title, name} = req.body;
        const dataID = req.params.id 
        if (!title && !name) {
            return res
                .status(400)
                .json({
                    errorMessage: "Empty input, you need to write your info",
                });
        }

        if(!dataID) 
        return res.status(400).json({errorMessage: "Sorry!!! not found anything to delete"});

        const primaryData = await Model.findById(dataID);
        
        if (!primaryData) 
        return res.status(400).json({errorMessage: "Sorry!!! not found anything to delete...."})
        

        if (primaryData.user.toString() !== req.user)
        return res.status(404).json({errMessage: "Untothorised request"})
        primaryData.title = title;
        primaryData.name = name;

        const savedData = await primaryData.save();
        res.json(savedData);

    } catch (error){
        res.status(500).json({errorMessage: "Sorry!!! not found your data"});

    }

});

//POST method 

express.post("/", middleware1 , async (req, res) => {
    try {
        const { title, name } = req.body;

        if (!title && !name) {
            return res
                .status(400)
                .json({
                    errorMessage: "Empty input, you need to write your info",
                });
        }

        const newModel = new Model({
            title,
            name,
            user: req.user
        });
        const myModel = await newModel.save();
        res.json(myModel);
    } catch (error) {
        res.status(500).json({errorMessage : "Sorry!!!! error!!! try again"})
    }
});

module.exports = express;
