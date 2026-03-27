const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
let database;
const initDb = async () => {
  const client = await MongoClient.connect(process.env.uri);
  database = client.db("todo");
};

const getDb = () => {
  if (!database) {
    throw new Error("You must connect first!");
  }
  return database;
};

module.exports = {
  initDb,
  getDb,
};
