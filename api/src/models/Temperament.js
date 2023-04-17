const { DataTypes } = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('Temperament',{
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type:DataTypes.STRING,
            allowNull:false,
            unique: false
        }
    });
};