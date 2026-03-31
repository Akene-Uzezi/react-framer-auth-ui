const express = require("express");
const router = express.Router();
const authVerify = require("../middlewares/authverify");
const todoController = require("../controllers/todo.controller");

router.get("/", todoController.getAllTodos);

router.get("/dashboard", authVerify, todoController.todoDashboard);

router.post("/", todoController.addTodo);

router.patch("/:id", todoController.updateTodo);

router.delete("/:id", todoController.deleteTodo);

module.exports = router;
