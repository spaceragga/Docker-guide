function loadConfig() {
  const port = parseInt(process.env.PORT || "3000", 10);
  return {
    port,
    nodeEnv: process.env.NODE_ENV || "production",
    appName: process.env.APP_NAME || "Stage2 API",
    publicMessage: process.env.PUBLIC_MESSAGE || "API with Mongo",
    mongoUrl: process.env.MONGO_URL || "mongodb://root:example@mongo:27017",
    mongoDb: process.env.MONGO_DB || "appdb",
  };
}

module.exports = { loadConfig };
