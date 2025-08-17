function loadConfig() {
  const port = parseInt(process.env.PORT || "3000", 10);
  return {
    port,
    nodeEnv: process.env.NODE_ENV || "production",
    appName: process.env.APP_NAME || "Stage1 API",
    publicMessage:
      process.env.PUBLIC_MESSAGE || "Hello from containerized Node.js!",
  };
}

module.exports = { loadConfig };
