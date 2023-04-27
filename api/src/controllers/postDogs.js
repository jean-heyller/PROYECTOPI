const { Dog,Temperament } = require('../db');
const { Op } = require('sequelize');

const postDog = async (req, res) => {
    try {
        const { height, weight_min,name,height_max,height_min, weight_max,life_span, temperament,image } = req.body;
        const temp = temperament.join(" ")
        const newDog = await Dog.create({
            name: name,
            height: {
                imperial:`${height_min}/${height_max}`
            },
            weight: {
                imperial:`${weight_min}-${weight_max}`
            },
            life_span: life_span,
            temperament: temp,
            image: {
                url:image
            }
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
          console.log(newDog)
        await newDog.addTemperaments(idTemp);
        return res.status(201).json(newDog);
    } catch (error) {
        console.error(error);
        return res.status(500).json({msg:"internal server error"});
    }
};
module.exports = postDog;