const ObjectId = require("mongodb").ObjectId;
const db = require("../db/todo.db");
class Todo {
  constructor(text, id) {
    this.text = text;
    this.id = id;
  }

  save() {
    if (this.id) {
      const todoId = new ObjectId(this.id);
      return db
        .getDb()
        .collection("todos")
        .updateOne({ _id: todoId }, { $set: { text: this.text } });
    }
    return db.getDb().collection("todos").insertOne({ text: this.text });
  }

  delete() {
    if (!this.id) {
      throw new Error("Todo does not exits");
    }
    const todoId = new ObjectId(this.id);
    return db.getDb().collection("todos").deleteOne({ _id: todoId });
  }

  static async getTodos() {
    const todoDocs = await db.getDb().collection("todos").find().toArray();
    return todoDocs.map((doc) => {
      return new Todo(doc.text, doc._id);
    });
  }
}

module.exports = Todo;
