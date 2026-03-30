const db = require("../db/todo.db");
const bcrypt = require("bcrypt");
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  async saveUser() {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    await db.getDb().collection("users").insertOne({
      username: this.username,
      password: hashedPassword,
    });
  }

  static async findByUsername(username) {
    const user = await db.getDb().collection("users").findOne({ username });
    return user;
  }
}

module.exports = User;
