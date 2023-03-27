// servidor web para la API de la tienda online

// importar dependencias
import express from "express";
//const express = require("express");
import morgan from "morgan";
import indexRouter from "./routes/index.js";
import productsRouter from "./routes/products.js";

// crear una instancia de express
const app = express();
app.use(morgan("dev"));

// definir la ruta raíz
app.use("/", indexRouter);
app.use("/products", productsRouter);

// arrancar el servidor por el puerto 3000
app.listen(3000);
