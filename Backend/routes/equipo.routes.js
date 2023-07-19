import express from "express";
import { obtenerEquipo,agregarEquipo,borrarEquipo,actualizarEquipo } from "../controllers/equipos.controllers.js";

const router = express.Router();

router.get("/all",obtenerEquipo);
router.post("/add",agregarEquipo);
router.delete("/del/:id", borrarEquipo);
router.patch("/upd/:id", actualizarEquipo);

export default router;