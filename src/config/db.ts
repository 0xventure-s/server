import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv"

dotenv.config()
const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [__dirname + '/../models/**/*'], // Carga todos los modelos de la carpeta models
  });
  

export default db