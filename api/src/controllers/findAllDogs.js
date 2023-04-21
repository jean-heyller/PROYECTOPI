const axios = require('axios');
const { Dog } = require('../db');
require("dotenv").config;
const {API_KEY,API_URL} = process.env;

const findAllDogs = async (req,res)=>{
    try{
        const dogsDb = await Dog.findAll();
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}`)
        const  dogsApi = response.data 
        const allDogs = [...dogsDb,...dogsApi]

        return res.status(201).json(allDogs);
    }catch (error){
        return res.status(500).json({ error: error.message })
    };
};
module.exports = findAllDogs;