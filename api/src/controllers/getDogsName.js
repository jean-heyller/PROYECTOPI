require("dotenv").config();
const { Op } = require('sequelize');
const { API_KEY, API_URL } = process.env;
const { Dog } = require("../db");
const axios = require('axios');

const getDogsByName = async (req, res) => {
  try {
    const { name } = req.query;

    const nameQuery = `%${name}%`;

  
    const dogsFromDb = await Dog.findAndCountAll({
      where: {
        name: { [Op.iLike]: nameQuery },
      },
    });
    
    const dogsDb = dogsFromDb.rows[0]
    if(dogsDb){
      return res.status(200).json(dogsDb)
    }
    const dogsFromApi = await axios.get(`${API_URL}/search?q=${name}`);
    const dogsData = dogsFromApi.data.map((dog) => ({
      id: dog.id,
      name: dog.name,
      temperament: dog.temperament,
      weight: dog.weight,
      image: {
        url: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
      }
    }));
    if (dogsData.length>=1) {
      return res.status(201).json( dogsData[0]);
    }
    if(dogsData.length===0 && !dogsDb) {
      return res.status(404).json({msg:"no existe niguna raza con ese nombre"});
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = getDogsByName;