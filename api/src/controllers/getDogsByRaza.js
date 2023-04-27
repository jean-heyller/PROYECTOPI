require("dotenv").config(); 
const { API_KEY, API_URL, API_ID } = process.env; 
const { Dog } = require("../db"); 
const axios = require('axios'); 


const getDogsByraza = async (req, res) => {
    const { id } = req.params; // obtiene el parámetro "id" de la solicitud
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; // expresión regular para validar un UUID
    const isUuid = uuidRegex.test(id); // verifica si el "id" es un UUID válido

    try {
        if (!isUuid) { // si el "id" no es un UUID
            const response = await axios
                .get(`${API_ID}/${id}?api_key=${API_KEY}`); // hace una petición a la API de The Dog API para obtener información de la raza
            const breed = response.data; // obtiene los datos de la raza de la respuesta de la API
            breed.image = { // agrega la URL de la imagen de la raza al objeto "breed"
                url: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
            };
            return res.status(201).json(breed); // retorna la respuesta con el objeto "breed" y el estado HTTP 201 (Created)
        };

        if (isUuid) { // si el "id" es un UUID válido
            const breedDb = await Dog.findOne({ // busca la raza en la base de datos
                where: {
                    id: id
                }
            });
            return res.status(206).json(breedDb); // retorna la respuesta con la raza encontrada en la base de datos y el estado HTTP 206 (Partial Content)
        };
    } catch (error) {
        res.status(500).json({ msg : "error interno"}); // retorna la respuesta con el mensaje de error y el estado HTTP 404 (Not Found)
    };
};

module.exports = getDogsByraza; // exporta la función getDogsByraza para ser usada por otros archivos
