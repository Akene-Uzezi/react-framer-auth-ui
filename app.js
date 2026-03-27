const express = require("express");
const db = require("./db/todo.db");
const app = express();
const todoRoutes = require("./routes/todo.routes");
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "test",
  });
});

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
