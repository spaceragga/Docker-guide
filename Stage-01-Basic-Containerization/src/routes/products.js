const { Router } = require("express");

const router = Router();

// Mock of a business endpoint that you can later back with a DB
router.get("/", (req, res) => {
  const products = [
    { id: "p-100", name: "Acme Anvil", price: 129.99, currency: "USD" },
    { id: "p-101", name: "Roadrunner Sneakers", price: 89.0, currency: "USD" },
    { id: "p-102", name: "Dynamite Bundle", price: 59.5, currency: "USD" },
  ];
  res.json({ count: products.length, products });
});

module.exports = router;
