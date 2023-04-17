const { Dog } = require('../db');

const postDog = async (req, res) => {
    try {
        const { height, name, weight, image, life_span } = req.body;
        if (!height || !name || !weight || !image || !life_span) {
            return res.status(400).json({ msg: "Faltan datos" });
        }
        const newDog = await Dog.create({
            name: name,
            height: height,
            weight: weight,
            image: image,
            life_span: life_span
        });
        return res.status(201).json(newDog);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Hubo un error al guardar el perro" });
    }
};
module.exports = postDog;