const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');            //Importar la librería para el manejo de variables de entorno

dotenv.config({ path: './config.env' });     //Indicar la ruta donde se alojan las variables de entorno

const db = new Sequelize({
    dialect: 'postgres',      
    host: 'localhost',        //process.env.DB_HOST
    username: 'postgres',     //process.env.DB_USERNAME
    password: 'PoStGrEs13',   //process.env.DB_PASSWORD
    database: 'computers',    //process.env.DB
    logging: false
});

module.exports = { db };