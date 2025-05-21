import express from "express";
import customerRoutes from "./Routes/customerRoutes.js";
import castingRoutes from "./Routes/castingRoutes.js";
import cors from "cors";
import dotenv from 'dotenv'

const app = express();
const PORT = process.env.PORT ||  5000;

app.use(express.json());
app.use(cors())
dotenv.config()


app.use("/api/customers", customerRoutes);
app.use("api/castings",castingRoutes);

app.get("/", (req, res) => {
  res.send("Hellooo");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});