import express from "express";
import {obtenerEtapa, agregarEtapa, borrarEtapa, actualizarEtapa} from "../controllers/etapas.controllers.js"

const router = express.Router();

router.get("/all",obtenerEtapa);
router.post("/add",agregarEtapa);
router.delete("/del/:id", borrarEtapa);
router.patch("/upd/:id", actualizarEtapa);

export default router;