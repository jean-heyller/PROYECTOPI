const {Temperament} = require('../db');
const axios = require('axios');
require("dotenv").config();
const {API_KEY,API_URL} = process.env;
const getTemperaments = async (req,res) =>{
    try{
        const response = await axios
        .get(`${API_URL}?api_key=${API_KEY}`);
        const breeds = response.data ;
        const Temperaments = breeds.map((animal)=>{
            return animal.temperament
        })
        const objects = Temperaments.map((temp)=>{
            return {
                name : temp
            };
        });
        const filterd = objects.filter((data)=>{
            return data.name !== undefined
        })
        Temperament.bulkCreate(filterd)
        if(filterd.length>0){
            res.status(201).json({msg:"Temperament guardados con exito"});
        }
    }catch (error) {
        return res.status(500).json({ err: error.message });
    };
};

module.exports = getTemperaments;