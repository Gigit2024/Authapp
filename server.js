const express = require('express');
const app = express();
<<<<<<< HEAD

app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
=======
const pool = require('./DB/db');

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`¡Servidor funcionando correctamente! Hora de la base de datos: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send('Error conectando a la base de datos');
  }
>>>>>>> ececf28 (Proyecto Auth-app funcionando y conectado a PostgreSQL)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});