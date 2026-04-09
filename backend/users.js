/**
 * @swagger
 * /login:
 *   post:
 *     summary: Вход пользователя
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mail:
 *                 type: string
 *                 example: Vasyliy@mail.com
 *               password:
 *                 type: string
 *                 example: 123
 *     responses:
 *       200:
 *         description: Успешный вход
 *       401:
 *         description: Неверный email или пароль
 */
app.post("/login", async (req, res) => {
  const { mail, password } = req.body;

  try {
    const user = await pool.query(
      "SELECT * FROM users WHERE mail = $1 AND password = $2",
      [mail, password]
    );

    if (user.rows.length === 0) {
      return res.status(401).json({ message: "Неверный email или пароль" });
    }

    res.json({ message: "Успешный вход", user: user.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send("Ошибка сервера");
  }
});