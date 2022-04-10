require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");



mongoose
  .connect(
    `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASS}@cluster0.mypts.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch((error) => {
    console.log("Connexion à MongoDB échouée !" + error);
  });

const todosRoutes = require("./routes/todos");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://127.0.0.1:8080",
  })
);

// creation des routes de l'app
app.use("/ping", (req, res) => {
  res.status(200).send("PING OK");
});
app.use("/api/v1/todos", todosRoutes);
// app.use('/api/v1/auth', authRoutes);

module.exports = app;
