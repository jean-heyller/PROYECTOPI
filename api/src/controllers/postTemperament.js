
const {Temperament} = require("../db");


const postTemperament = async (req, res) => {
    try {
    const { name } = req.body;
    if (!name ) {
        return res.status(400).json({ msg: "Faltan datos" });
    }
    const [user, created] = await Temperament.findOrCreate({
        where: { name },
    });
    if (created) {
        return res.status(201).json(user);
    } else {
        alert("usuario existente")
        return res.status(200).json(user);
    }
    } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Hubo un error al guardar el usuario" });
    }
    };

    module.exports = postTemperament;