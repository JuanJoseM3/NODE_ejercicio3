const { db } = require('../utils/database');
const { DataTypes } = require('sequelize');

const Repair = db.define('repair', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    date: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    computerNumber: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    comments: {
        allowNull: true,
        type: DataTypes.STRING
    },
    status: {
        defaultValue: 'pending',
        type: DataTypes.STRING,
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
});

module.exports = { Repair };
