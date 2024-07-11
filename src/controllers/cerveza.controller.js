import { Cerveza } from "../models/Cerveza.js";
import { Marca } from "../models/Marca.js";

export async function getCervezas(req, res) {
  try {
    const cervezas = await Cerveza.findAll({
      atributes: ["id", "name", "cantidad", "description", "deliverydate"],
    });
    res.json(cervezas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createCerveza(req, res) {
  const { name, cantidad, description, deliveryDate } = req.body;
  try {
    let newCerveza = await Cerveza.create(
      {
        name,
        cantidad,
        description,
        deliveryDate: new Date(deliveryDate).getTime(),
      },
      {
        fields: ["name", "cantidad", "description", "deliverydate"],
      }
    );
    return res.json(newCerveza);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getCerveza(req, res) {
  const { id } = req.params;
  try {
    const cerveza = await Cerveza.findOne({
      where: {
        id,
      },
    });
    res.json(cerveza);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateCerveza = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, cantidad, description } = req.body;

    const cerveza = await Cerveza.findByPk(id);
    project.name = name;
    project.cantidad = cantidad;
    project.description = description;
    await project.save();

    res.json(cerveza);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteCerveza(req, res) {
  const { id } = req.params;
  try {
    await Marca.destroy({
      where: {
        cervezaId: id,
      },
    });
    await Cerveza.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getCervezaMarcas(req, res) {
  const { id } = req.params;
  try {
    const tasks = await Marca.findAll({
      attributes: ["id", "cervezaId", "name", "done"],
      where: { cervezaId: id },
    });
    res.json(marcas);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}