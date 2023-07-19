import express from "express";
import cors from "cors"
import conectarDB from "../config/config.js"
import ciclistasRouter from "../routes/ciclistas.routes.js"
import equiposRouter from "../routes/equipo.routes.js"
import etapasRouter from "../routes/etapas.routes.js"
import premiosRouter from "../routes/premios.routes.js"

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.ciclistasPath = '/ciclistas';
        this.equiposPath = '/equipos';
        this.etapasPath = '/etapas';
        this.premiosPath = '/premios';
        this.conectar();
        this.middlewars();
        this.routes();
}

async conectar(){
    await conectarDB();
}

middlewars(){
    this.app.use(cors());
    this.app.use(express.json());
}

routes(){
    this.app.use(this.ciclistasPath, ciclistasRouter);
    this.app.use(this.equiposPath, equiposRouter);
    this.app.use(this.etapasPath, etapasRouter);
    this.app.use(this.premiosPath, premiosRouter);
}

listen(){
    this.app.listen(this.port, ()=>{
        console.log(`SERVER RUNNING ON PORT ${this.port}`);
    });
}

}

export default Server;