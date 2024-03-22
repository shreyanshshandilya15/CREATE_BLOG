import express from "express";
import { connectDB } from "./data/database.js";
import dotenv from "dotenv"
import AuthRoutes from "./routes/auth.js"
import UserRoutes from "./routes/users.js"

dotenv.config();
const app=express();
app.use(express.json());
connectDB();

app.use("/api/v1/auth",AuthRoutes);
app.use("/api/v1/user",UserRoutes);

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`server is running on port ${process.env.SERVER_PORT} successfully`);
});