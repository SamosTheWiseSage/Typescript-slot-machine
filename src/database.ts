// database.ts
import mariadb from 'mariadb';

// Create a pool of connections to your local MariaDB instance
const pool = mariadb.createPool({
  host: 'localhost', // Database host (localhost for local server)
  user: 'root',      // Your MariaDB username
  password: 'Underfell5958', // Your MariaDB password
  database: 'TokenDB', // The name of your database
  connectionLimit: 5, // Limit on number of simultaneous connections
});

export default pool;
