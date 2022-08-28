import { Sequelize } from "sequelize";

const db = new Sequelize("test2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
