const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require("express");
const app = express();
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*
Verbos HTTP
GET - obtener recursos
POST - almacenar/crear recursos   
PUT - modificar un recurso completo
PATCH - modificar una parte recurso
DELETE - borrar un recurso
*/

app.get("/", (req, res, next) => {
  return res.status(200).send("Bienvenido al pokedex");
});
app.use("/pokemon",pokemon );

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
});


