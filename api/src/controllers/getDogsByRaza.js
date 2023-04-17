require("dotenv").config;
const {API_KEY,API_URL} = process.env;
const {Dog} = require("../db");
const axios = require('axios');
const getDogsByraza = async (req,res)=>{
    try {
            const {id} = req.params;
            const response = await axios
            .get(`${API_URL}/${id}?api_key=${API_KEY}`);
            const breed = response.data
            if(Object.keys(breed).length !== 0){
                return res.status(201).json(breed);
            };
            const breedDb = await Dog.findOne(
                {where:{id : id}})  
            if(breedDb){
                return res.status(200).json(breedDb);
            };
    }catch (error){
        res.status(404).json({ message: 'Raza no encontrada' });
    };
};

module.exports = getDogsByraza;