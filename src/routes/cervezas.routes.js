import { Router } from "express";
import {
  getCervezas,
  createCerveza,
  updateCerveza,
  getCerveza,
  deleteCerveza,
  getCervezaMarcas,
} from "../controllers/cerveza.controller.js";

const router = Router();

// Routes
router.post("/", createCerveza);
router.get("/", getCervezas);
router.put("/:id", updateCerveza);
router.delete("/:id", deleteCerveza);
router.get("/:id", getCerveza);

router.get("/:id/tasks", getCervezaMarcas);

export default router;