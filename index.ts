import * as express from "express";

const app = express();

if (process.env.ENVIRONMENT == "dev") {
  console.log("Entro dev");
} else if (process.env.ENVIRONMENT == "prod") {
  console.log("Entro prod");
}
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
