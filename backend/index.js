const express = require('express');
const cors = require('cors');
const pool = require('./db');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"]// путь к файлам с @swagger комментариями
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Пример маршрута
app.get("/users", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.json(users.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));