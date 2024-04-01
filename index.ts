import * as express from "express";

const app = express();

app.get("/prueba", (req, res) => {
  res.json("Ok");
});

app.get("/entorno", (req, res) => {
  res.json(process.env.ENVIRONMENT);
});

//console.log("Hola soy index " + process.env.NAME); //undefined pues no esta se cargo el .env con dotenv (NO CARGAR LAS VARIABLES )

app.listen(3000, () => {
  console.log("corriendo el servidor");
});
