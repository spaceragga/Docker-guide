const client = require("prom-client");

// Default registry and metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Custom HTTP request counter
const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status"],
});
register.registerMetric(httpRequestsTotal);

function metricsMiddleware(req, res, next) {
  const start = Date.now();
  res.on("finish", () => {
    httpRequestsTotal
      .labels(req.method, req.route?.path || req.path, String(res.statusCode))
      .inc();
  });
  next();
}

async function metricsHandler(_req, res) {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
}

module.exports = { metricsMiddleware, metricsHandler };
