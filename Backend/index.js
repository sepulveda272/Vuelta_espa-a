import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import cors from "cors"
import ciclistasRouter from "./routes/ciclistas.routes.js"

const app = express();


app.use(express.json());

dotenv.config();

const configCors = {
    methods: ['POST','GET','PATCH','DELETE']
}

app.use(cors(configCors))

app.use("/ciclistas", ciclistasRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, ()=> {
    console.log(`El server listening on ${PORT}`);
})