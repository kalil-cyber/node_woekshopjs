const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/noteDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log("Error connecting to MongoDB:", err);
});

// Définir la route principal d'une API
app.use("/api/notes", noteRoutes);

// Lancement du Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
