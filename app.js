const express = require("express");
const db = require("./db/todo.db");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const todoRoutes = require("./routes/todo.routes");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "test",
  });
});

app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
  console.log(error);
});

db.initDb()
  .then(() => {
    app.listen(3000);
    console.log("started the server and connected to the db");
  })
  .catch((err) => {
    console.log(err);
  });
