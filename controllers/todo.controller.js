const Todo = require("../models/todo.model");

const getAllTodos = async (req, res, next) => {
  let todos;
  try {
    todos = await Todo.getTodos();
    res.json({
      todos,
    });
  } catch (err) {
    next(err);
  }
};

const addTodo = async (req, res, next) => {
  const todoText = req.body.text;
  const todo = new Todo(todoText);
  let insertedId;
  try {
    const result = await todo.save();
    insertedId = result.insertedId;
  } catch (err) {
    next(err);
  }
  todo.id = insertedId.toString();
  res.json({ message: "Added todo successfully", createdTodo: todo });
};

const updateTodo = async (req, res, next) => {
  const todoId = req.params.id;
  const newTodoText = req.body.newText;

  const todo = new Todo(newTodoText, todoId);
  try {
    await todo.save();
  } catch (err) {
    return next(err);
  }

  res.json({ message: "Todo updated", updatedTodo: todo });
};

const deleteTodo = async (req, res, next) => {
  const todoId = req.params.id;

  const todo = new Todo(null, todoId);
  try {
    await todo.delete();
  } catch (err) {
    return next(err);
  }

  res.json({ message: "Todo deleted" });
};

module.exports = {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
