import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import ciclistasRouter from "./routes/ciclistas.routes.js"

const app = express();
dotenv.config();

app.use("/ciclistas", ciclistasRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, ()=> {
    console.log(`El server listening on ${PORT}`);
})