const { Router } = require('express');
const postDog = require("../controllers/postDogs");
const findAllDogs = require("../controllers/findAllDogs");
const getDogsByraza = require("../controllers/getDogsByRaza");
const getDogsByName = require("../controllers/getDogsName");
const getTemperaments = require('../controllers/getTemperaments')
require("dotenv").config();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/dogs",postDog);
router.get("/dogs",findAllDogs);
router.get("/dogs/name",getDogsByName);
router.get("/dogs/temperament",getTemperaments);
router.get("/dogs/:id",getDogsByraza);




module.exports = router;
