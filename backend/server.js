const mongoose = require("mongoose");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

const healthRoutes = require("./routes/healthRoutes");
const productRoutes = require("./routes/productRoutes");

/* ✅ TEMPORARY OPEN CORS (FOR DEBUGGING) */
app.use(cors());   // allow ALL origins

app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("ArtisansChain Backend Running");
});

app.use("/api", healthRoutes);
app.use("/api", productRoutes);

const PORT = 5000;
mongoose.connect("mongodb://127.0.0.1:27017/artisanschain")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});