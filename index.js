import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import { connectDB } from "./src/lib/db.js";
import cookieParser from "cookie-parser";
const app = express();

//input route
import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from "./src/routes/message.route.js";

// Add middleware to parse JSON requests
app.use(express.json());
app.use(cors())
app.use(cookieParser())

const uri = process.env.MONGODB_URL;

//database connection 
connectDB({uri})

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
