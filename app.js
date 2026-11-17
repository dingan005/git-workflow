import express from "express";
const app = express();

port = process.env.PORT || 3000;
db_username = process.env.db_username;
db_password = process.env.db_password;
api_key = process.env.api_key;
paassword = process.env.paassword;

app.get("/", (req, res) => {
  res.send("Hello World!");
});