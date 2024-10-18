import express from "express";
import { router } from "./router";
import db from "./config/db";
import cors ,{ CorsOptions } from "cors"


async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("Todo un exito papu");
    
  } catch (error) {
    console.log(error);
  }
}
connectDB();

export const server = express();



const corsOption: CorsOptions = {
  origin: function(origin, callback) {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error("Error en cors capo"));
    }
  },
};
server.use(cors(corsOption))




server.use(express.json())
server.use("/api/productos", router);
