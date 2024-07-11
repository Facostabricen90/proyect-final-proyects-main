import { Marca } from "../models/Marca.js";
import { Router } from "express";
import { getCervezas, getCervezaMarcas } from "../controllers/cerveza.controller.js";

const router = Router();

export async function createMarca(req, res) {
  try {
    const { name, existencias, cervezaId } = req.body;
    const newMarca = await Marca.create({
      cervezaId,
      name,
      existencias,
    });
    res.json(newMarca);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getMarcas(req, res) {
  try {
    const marcas = await Marca.findAll({
      attributes: ["id", "cervezaId", "name", "existencias"],
      order: [["id", "DESC"]],
    });
    res.json(marcas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateMarca(req, res) {
  const { id } = req.params;
  try {
    const marca = await Marca.findOne({
      attributes: ["name", "cervezaId", "existencias", "id"],
      where: { id },
    });

    marca.set(req.body);

    await marca.save();

    res.json(marca);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteMarca(req, res) {
  const { id } = req.params;
  try {
    await Marca.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getMarca(req, res) {
  const { id } = req.params;
  try {
    const marca = await Marca.findOne({
      where: { id },
      attributes: ["id", "cervezaId", "name", "existencias"],
    });
    res.json(marca);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

router.get("/", async (req, res) => {
  const cervezas = await getCervezas(req, res);
  res.render("cervezas", { cervezas });
});

// Ruta para obtener y renderizar las tareas de un proyecto específico
router.get("/:id/marcas", async (req, res) => {
  const { id } = req.params;
  const marcas = await getCervezaMarcas(req, res);
  res.render("marcas", { marcas, cervezaId: id });
});