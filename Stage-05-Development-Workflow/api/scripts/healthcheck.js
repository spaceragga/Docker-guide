const http = require("http");

const options = {
  host: "127.0.0.1",
  port: process.env.PORT || 3000,
  path: "/health",
  timeout: 2000,
};

const req = http.request(options, (res) => {
  if (res.statusCode >= 200 && res.statusCode < 300) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});

req.on("error", () => process.exit(1));
req.end();


