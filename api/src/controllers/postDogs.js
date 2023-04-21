const { Dog,Temperament } = require('../db');
const { Op } = require('sequelize');

const postDog = async (req, res) => {
    try {
        const { height, name, weight, life_span, temperament,image } = req.body;
        if (!height || !name || !weight || !life_span || !temperament) {
            return res.status(400).json({ msg: "Faltan datos" });
        }
        const temp = temperament.join(" ")
        const newDog = await Dog.create({
            name: name,
            height: height,
            weight: {
                imperial:weight.imperial
            },
            life_span: life_span,
            temperament: temp,
            image: image
             // Agregar la propiedad "temperament" con los valores seleccionados
          });
          const idTemp =  await Temperament.findAll({
            attributes : ['ID'],
            where: {
                name: {
                    [Op.in]: temperament
                }
            }
          })
          console.log(idTemp)
        await newDog.addTemperaments(idTemp);
        return res.status(201).json({msg:"perro guardado con exito"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({msg:error.message});
    }
};
module.exports = postDog;