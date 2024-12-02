const { DB } = require('./db');

(async () => {
  try {
    // Intenta conectarte a la base de datos
    const client = await DB.connect();
    console.log('Conexión a la base de datos exitosa');
    client.release(); // Libera el cliente después de usarlo
    process.exit(0);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    process.exit(1);
  }
})();
