const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola desde el servidor Express del contenedor')
})

app.listen(port, () => {
  console.log(`Hola desde el servidor Express/Kubernetes del contenedor listening at http://localhost:${port}`)
});