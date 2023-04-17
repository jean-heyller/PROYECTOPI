const { Dog } = require('../db');

const findAllDogs = async (req,res)=>{
    try{
        const  allDogs = await Dog.findAll();
        return res.status(201).json(allDogs);
    }catch (error){
        return res.status(500).json({ error: error.message })
    };
};
module.exports = findAllDogs;