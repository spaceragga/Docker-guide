const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const uptimeSeconds = process.uptime();
  const memory = process.memoryUsage();
  res.status(200).json({
    status: "ok",
    uptimeSeconds,
    memory,
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
