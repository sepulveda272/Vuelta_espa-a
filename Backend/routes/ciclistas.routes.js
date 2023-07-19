import express from "express";
import { obtenerCiclistas,agregarCiclistas, borrarCiclistas,actualizarCiclistas } from "../controllers/ciclista.controllers.js";

const router = express.Router();

router.get("/all",obtenerCiclistas);
router.post("/add", agregarCiclistas);
router.delete("/del/:id", borrarCiclistas);
router.patch("/upd/:id", actualizarCiclistas);

export default router;