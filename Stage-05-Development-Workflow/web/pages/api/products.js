export default async function handler(req, res) {
  const base = process.env.API_BASE_URL || "http://api:3000";
  const url = `${base}/products`;
  try {
    if (req.method === "GET") {
      const r = await fetch(url);
      const json = await r.json();
      return res.status(r.status).json(json);
    }
    if (req.method === "POST") {
      const r = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body || {}),
      });
      const json = await r.json();
      return res.status(r.status).json(json);
    }
    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (e) {
    return res.status(502).json({ error: "Bad Gateway", detail: String(e) });
  }
}


