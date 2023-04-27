const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,

    },
    image: {
      type: DataTypes.JSON,
      allowNull:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    height: {
      type: DataTypes.JSON,
      allowNull:false
    },
    weight: {
      type: DataTypes.JSON,
      allowNull:false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull:false
    },
    origin: {
      type: DataTypes.ENUM("Db"),
      defaultValue: "Db",
    },
    temperament:{
      type: DataTypes.STRING,
      allowNull:false
    }
  });
};
