const { Router } = require("express");
const { getDb } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  const db = await getDb();
  const products = await db
    .collection("products")
    .find({})
    .limit(100)
    .toArray();
  res.json({ count: products.length, products });
});

router.post("/", async (req, res) => {
  const { name, price, currency } = req.body || {};
  if (!name || typeof price !== "number" || !currency) {
    return res
      .status(400)
      .json({ error: "name, price(number), currency required" });
  }
  const db = await getDb();
  const result = await db
    .collection("products")
    .insertOne({ name, price, currency });
  res.status(201).json({ id: result.insertedId, name, price, currency });
});

module.exports = router;
