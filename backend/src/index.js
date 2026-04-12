require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

// =====================
// MIDDLEWARE
// =====================
app.use(cors());
app.use(express.json());

// =====================
// POSTGRES CONNECTION
// =====================
const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// =====================
// SWAGGER
// =====================
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
    },
  },
  apis: ["./index.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// =====================
// ROOT
// =====================
app.get("/", (req, res) => {
  res.type("html").send(`
    <h1>🚀 My API is running</h1>
    <p>Go to <a href="/users">/users</a></p>
    <p>Go to <a href="/api-docs">/api-docs</a></p>
  `);
});

// =====================
// USERS
// =====================
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// =====================
// LOGIN
// =====================
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: invalid credentials
 */
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // проверка входных данных
    if (!email || !password) {
      return res.status(400).json({ message: "Email и пароль обязательны" });
    }

    // запрос в БД
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );

    // если пользователь не найден
    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Неверный email или пароль" });
    }

    return res.json({ message: "Успешный вход" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

// =====================
// DRIVERS
// =====================
app.get("/drivers", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM drivers");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// =====================
// VACANCY
// =====================
app.get("/vacancy", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM vacancy");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// =====================
// APPLICATIONS
// =====================
app.get("/applications", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        a.id,
        d.full_name,
        d.category AS driver_category,
        v.title,
        v.required_category
      FROM applications a
      JOIN drivers d ON d.id = a.driver_id
      JOIN vacancy v ON v.id = a.vacancy_id
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// =====================
// 404
// =====================
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// =====================
// START SERVER
// =====================
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});