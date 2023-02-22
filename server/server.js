import express from "express";
import { pool } from "./data/db.js";
import cors from "cors";

const app = express(cors());


app.get("/kelimeler/:wordId", async function (req, res) {
  try {
    const [words] = await pool.query("select * from turkce_sozluk where id=?", [
      req.params.wordId,
    ]);
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // İzin verilen alan adı
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.json(words);
  } catch (error) {
    console.log(error);
  }
});


app.get("/aranan_kelime/:wordName", async function (req, res) {
  try {
    const [words] = await pool.query("select * from turkce_sozluk where kelime like ?", [
      req.params.wordName + '%',
    ]);
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // İzin verilen alan adı
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.json(words);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", async function (req, res) {
  try {
    const [words] = await pool.query("select * from turkce_sozluk ");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json(words);
  } catch (error) {
    console.log(error);
  }
});

app.get("/greet", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => console.log("Node server listening on port 5000!"));
