const { Router } = require("express");
const { checkDbConnection } = require("../db");
const { loadConfig } = require("../config");

const router = Router();
const config = loadConfig();

router.get("/", async (req, res) => {
  const uptimeSeconds = process.uptime();
  const memory = process.memoryUsage();
  const dbOk = await checkDbConnection();
  const status = dbOk ? "ok" : "degraded";
  const httpCode = dbOk ? 200 : 503;
  res.status(httpCode).json({
    status,
    db: dbOk ? "connected" : "unavailable",
    secretLoaded: Boolean(config.appSecret),
    uptimeSeconds,
    memory,
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
