// Importa el módulo dotenv para cargar las variables de entorno
require('dotenv').config();

// Importa el módulo Pool de pg (PostgreSQL)
const { Pool } = require('pg');

// Extrae las variables de entorno
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

// Configura la conexión a la base de datos
const DB = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    allowExitOnIdle: true, // Cierra automáticamente la conexión inactiva
});

// Exporta la conexión para usarla en otros archivos
module.exports = {
    DB,
};

