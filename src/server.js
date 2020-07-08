const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./config/key");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connexion to bdd
mongoose.connect(
  MONGOURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log("Bad connexion");
    return console.log("Connexion etablished!!");
  }
);
app.use(require("./routes/Photo.route"));

app.listen(5500, () => console.log("Server started.."));
