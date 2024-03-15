const express = require('express');

const app = express();
const port = 4000;

app.use('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor en el http://localhost:${port}`);
});
