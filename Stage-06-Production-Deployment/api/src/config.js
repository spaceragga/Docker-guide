const fs = require("fs");

function readSecretFile(path) {
  try {
    return fs.readFileSync(path, "utf8").trim();
  } catch (_) {
    return undefined;
  }
}

function loadConfig() {
  const port = parseInt(process.env.PORT || "3000", 10);
  const appSecret =
    process.env.APP_SECRET || readSecretFile(process.env.APP_SECRET_FILE || "");
  return {
    port,
    nodeEnv: process.env.NODE_ENV || "production",
    appName: process.env.APP_NAME || "Stage6 API",
    publicMessage: process.env.PUBLIC_MESSAGE || "Production API",
    mongoUrl: process.env.MONGO_URL || "mongodb://root:example@mongo:27017",
    mongoDb: process.env.MONGO_DB || "appdb",
    appSecret: appSecret || null,
  };
}

module.exports = { loadConfig };
