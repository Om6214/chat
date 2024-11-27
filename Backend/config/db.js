const mysql = require("mysql2");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,  // Use environment variables
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Promisify the pool.query function to use async/await
const promisePool = pool.promise();

// Test the database connection
promisePool.getConnection()
  .then(connection => {
    console.log("MYSQL connected");
    connection.release();  // Release the connection back to the pool
  })
  .catch(err => {
    console.error("Error connecting to MySQL:", err.message);
    process.exit(1);  // Exit the application if the connection fails
  });

module.exports = promisePool;
