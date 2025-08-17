const { MongoClient } = require("mongodb");
const { loadConfig } = require("./config");

const config = loadConfig();
let client;

async function getDb() {
  if (!client) {
    client = new MongoClient(config.mongoUrl, {
      // modern driver defaults are fine; tune pool if needed later
    });
    await client.connect();
  }
  return client.db(config.mongoDb);
}

async function checkDbConnection() {
  try {
    const db = await getDb();
    const result = await db.admin().ping();
    return result && result.ok === 1;
  } catch (e) {
    return false;
  }
}

module.exports = { getDb, checkDbConnection };
