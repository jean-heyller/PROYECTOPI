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
        const temperamentArray = [];

        Temperaments.forEach((str) => {
        if (str) { // verifica si str es nulo o indefinido
        const arr = str.split(",").map((item) => ({ name: item.trim() }));
        temperamentArray.push(...arr);
        }
        });
        const uniqueArr = temperamentArray.filter((elem, index, self) =>
        index === self.findIndex((t) => t.name === elem.name)
        );

        const result = uniqueArr.map(({ name }) => ({ name }));
        Temperament.bulkCreate(result)
        if(result.length>0){
            res.status(201).json({msg:"Temperamentos obetenidos"});
        }
    }catch (error) {
        return res.status(500).json({ err: error.message });
    };
};

module.exports = getTemperaments;