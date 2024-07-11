import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Marca } from "./Marca.js";

export const Cerveza = sequelize.define(
  "cervezas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Cerveza.hasMany(Marca, {
  foreinkey: "cervezaId",
  sourceKey: "id",
});
Marca.belongsTo(Cerveza, { foreinkey: "cervezaId", targetId: "id" });