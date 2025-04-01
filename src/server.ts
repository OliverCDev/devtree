import express from "express";
import "dotenv/config"
import router from "./router";
import { connectDB } from "./config/db";

const server = express();
//Habilitacion para la lectura de datos 
server.use(express.json());

connectDB();

server.use("/", router);


export default server;