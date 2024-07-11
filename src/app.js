import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser"; 

const app = express();

import cervezaRoutes from "./routes/cervezas.routes.js";
import marcaRoutes from "./routes/marcas.routes.js";
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(express.json());

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use("/api/cervezas", cervezaRoutes);
app.use("/api/marcas", marcaRoutes);

export default app;