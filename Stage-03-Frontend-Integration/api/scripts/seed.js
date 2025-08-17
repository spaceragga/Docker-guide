const { MongoClient } = require("mongodb");

const mongoUrl = process.env.MONGO_URL || "mongodb://root:example@mongo:27017";
const dbName = process.env.MONGO_DB || "appdb";

async function run() {
  const client = new MongoClient(mongoUrl);
  try {
    await client.connect();
    const db = client.db(dbName);
    const products = db.collection("products");
    await products.insertMany([
      { name: "Acme Hammer", price: 19.99, currency: "USD" },
      { name: "Roadrunner Net", price: 34.5, currency: "USD" },
      { name: "Dynamite Bundle", price: 59.5, currency: "USD" },
    ]);
    console.log("Seeded products");
  } finally {
    await client.close();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
