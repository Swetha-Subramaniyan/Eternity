import express from "express";
import customerRoutes from "./Routes/customerRoutes.js";
import castingRoutes from "./Routes/castingRoutes.js";
import filingRoutes from "./Routes/filingRoutes.js";
import settingRoutes from "./Routes/settingRoutes.js";
import buffingRoutes from "./Routes/buffingRoutes.js";
import additemRoutes from "./Routes/additemRoutes.js";
import supplierRoutes from "./Routes/supplierRoutes.js";
import purchaseRoutes from "./Routes/purchaseRoutes.js";


import cors from "cors";
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT ||  5000;

app.use(express.json());
app.use(cors())
dotenv.config()

app.use("/api/customers",customerRoutes);
app.use("/api/casting",castingRoutes);
app.use("/api/filing",filingRoutes);
app.use("/api/setting",settingRoutes);
app.use("/api/buffing",buffingRoutes);
app.use("/api/additem",additemRoutes);
app.use("/api/addsupplier", supplierRoutes);
app.use("/api/purchase",purchaseRoutes);


app.get("/", (req, res) => {
  res.send("Hellooo");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});




