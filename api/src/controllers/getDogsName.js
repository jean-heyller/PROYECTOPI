require("dotenv").config();
const { Op } = require('sequelize');
const { API_KEY, API_URL } = process.env;
const { Dog } = require("../db");
const axios = require('axios');

const getDogsByName = async (req, res) => {
  try {
    const { name } = req.query;

    const nameQuery = `%${name}`;
    console.log(nameQuery)
  
    const dogsFromDb = await Dog.findAll({
      where: {
        name: { [Op.iLike]: nameQuery },
      },
    });

    const dogsFromApi = await axios.get(`${API_URL}?api_key=${API_KEY}`);
    const dogsData = dogsFromApi.data.map((dog) => ({
      id: dog.id,
      name: dog.name,
      temperaments: dog.temperament 
    }));

    const dogs = [...dogsFromDb, ...dogsData];
    const breed = dogs.find((data)=>{
      return data.name===name
    })
    if (!breed) {
      return res.status(404).json({ message: 'No se encontraron razas de perros con ese nombre' });
    }

    return res.status(200).json(breed);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor 23' });
  }
};


module.exports = getDogsByName;