const {Temperament} = require('../db'); 
const axios = require('axios'); 
require("dotenv").config(); 
const {API_KEY,API_URL} = process.env; 
const getTemperaments = async (req,res) =>{
    try{
        const response = await axios
        .get(`${API_URL}?api_key=${API_KEY}`); 
        const breeds = response.data ; //guardar los datos de la respuesta en la variable breeds
        const Temperaments = breeds.map((animal)=>{
            return animal.temperament //obtener el temperamento de cada animal
        })
        const temperamentArray = []; //inicializar un array vacío para guardar los temperamentos

        Temperaments.forEach((str) => {
        if (str) { //verificar si str es nulo o indefinido
        const arr = str.split(",").map((item) => ({ name: item.trim() }));
        temperamentArray.push(...arr); //convertir el string de temperamentos en un array y agregarlo a la variable de array de temperamentos
        }
        });
        const uniqueArr = temperamentArray.filter((elem, index, self) =>
        index === self.findIndex((t) => t.name === elem.name)
        ); //eliminar elementos duplicados del array de temperamentos
        const result = uniqueArr.map(({ name }) => ({ name })); //crear un array de objetos que contenga solo el nombre del temperamento

        const temperamentDb = await Temperament.findAll(); //buscar todos los temperamentos en la base de datos
        if(temperamentDb.length===0){
            Temperament.bulkCreate(result); //crear los temperamentos si no existen en la base de datos
        }
        
        if(result.length>0){
            res.status(201).json(result); //enviar los temperamentos como respuesta si hay alguno en el array
        }
    }catch (error) {
        return res.status(500).json({ msg: "Error when obtaining the temperaments" }); 
    };
};

module.exports = getTemperaments; 
