import express from "express";
import {obtenerPremio,agregarPremio,borrarPremio,actualizarPremio} from "../controllers/premios.controllers.js";

const router = express.Router();

router.get("/all",obtenerPremio);

router.post("/add",agregarPremio);

router.delete("/del/:id",borrarPremio);

router.put("/upd/:id",actualizarPremio);

export default router;