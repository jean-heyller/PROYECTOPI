const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    image: {
      type: DataTypes.STRING,
      allowNull:false
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
    }
  });
};
