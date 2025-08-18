const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const { loadConfig } = require("./config");
const healthRouter = require("./routes/health");
const productsRouter = require("./routes/products");

const app = express();
const config = loadConfig();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/env", (req, res) => {
  res.json({
    appName: config.appName,
    env: config.nodeEnv,
    port: config.port,
    publicMessage: config.publicMessage,
    mongoUrl: config.mongoUrl,
    mongoDb: config.mongoDb,
    secretLoaded: Boolean(config.appSecret),
  });
});

app.use("/health", healthRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Stage 6 Production API" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(config.port, () => {
  console.log(`[stage6] ${config.appName} listening on port ${config.port}`);
});
