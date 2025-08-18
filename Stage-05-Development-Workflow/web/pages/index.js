import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ error: "API unreachable" }));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>{process.env.NEXT_PUBLIC_APP_NAME || "Stage5 Web (Dev)"}</h1>
      <p>Client fetch via local proxy: /api/products</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}


