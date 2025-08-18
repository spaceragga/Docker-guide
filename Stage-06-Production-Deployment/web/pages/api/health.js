export default async function handler(_req, res) {
  const base = process.env.API_BASE_URL || "http://api:3000";
  try {
    const r = await fetch(`${base}/health`);
    const json = await r.json();
    return res.status(r.status).json(json);
  } catch (e) {
    return res.status(502).json({ error: "Bad Gateway", detail: String(e) });
  }
}
