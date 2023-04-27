require("dotenv").config(); // carga las variables de entorno

const { Op } = require('sequelize'); // importa el operador de sequelize
const { API_KEY, API_URL } = process.env; // utiliza las variables de entorno
const { Dog } = require("../db"); // importa el modelo Dog de la base de datos
const axios = require('axios');

const getDogsByName = async (req, res) => {
  try {
    const { name } = req.query;

    const nameQuery = `%${name}`; // agrega el % para buscar nombres que contengan name en vez de ser iguales
    console.log(name);

    const dogsFromDb = await Dog.findAll({
      where: {
        name: { [Op.iLike]: nameQuery },
      },
    });

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

    const dogs = [...dogsFromDb, ...dogsData];
    const breed = dogs.find((data)=>{
      return data.name===name;
    });
    if (!breed) {
      return res.status(404).json({ message: 'No se encontraron razas de perros con ese nombre' });
    }

    return res.status(200).json(breed);
  } catch (error) {
    return res.status(500).json({ message: "Error interno" });
  }
};

module.exports = getDogsByName; 
