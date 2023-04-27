
axios = require('axios');


const { Dog } = require('../db');


require("dotenv").config;

const {API_KEY,API_URL} = process.env;


const findAllDogs = async (req,res)=>{
    try{
        // Buscamos todos los perros en nuestra base de datos usando el modelo "Dog"
        const dogsDb = await Dog.findAll();

        // Realizamos una solicitud GET a la API externa 
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}`)

        // Accedemos a la propiedad "data" de la respuesta de la API
        const  dogsApi = response.data 

        // Combinamos los perros de la base de datos y los perros de la API en una sola lista
        const allDogs = [...dogsDb,...dogsApi]

        // Devolvemos el array con todos los  perros 
        return res.status(201).json(allDogs);
    }catch (error){
        
        return res.status(500).json({ msg : "error con el servidor"})
    };
};


module.exports = findAllDogs;
