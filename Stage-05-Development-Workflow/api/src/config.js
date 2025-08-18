function loadConfig() {
  const port = parseInt(process.env.PORT || "3000", 10);
  return {
    port,
    nodeEnv: process.env.NODE_ENV || "development",
    appName: process.env.APP_NAME || "Stage5 API (Dev)",
    publicMessage: process.env.PUBLIC_MESSAGE || "Dev API with hot reload",
    mongoUrl: process.env.MONGO_URL || "mongodb://root:example@mongo:27017",
    mongoDb: process.env.MONGO_DB || "appdb",
  };
}

module.exports = { loadConfig };


