const { DataTypes } = require('sequelize');
const sequelize = require('../config/databse');

// favorite schma
const Favourite = sequelize.define('Favourite', {
  title: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  year: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  type: { 
    type: DataTypes.STRING,
    allowNull: false 
  },
  poster: { 
    type: DataTypes.STRING,
    allowNull: false
  },
},{
  timestamps: true
});

module.exports = Favourite;
