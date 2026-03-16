const express = require("express");
const app = express();
const healthRoutes = require("./routes/healthRoutes");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("ArtisansChain Backend Running");
});
app.use("/api", healthRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});