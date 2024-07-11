import { Router } from "express";
import {
  createMarca,
  getMarcas,
  updateMarca,
  deleteMarca,
  getMarca,
} from "../controllers/marca.controller.js";

const router = Router();

// Routes
router.post("/", createMarca);
router.put("/:id", updateMarca);
router.delete("/:id", deleteMarca);
router.get("/", getMarcas);
router.get("/:id", getMarca);

export default router;