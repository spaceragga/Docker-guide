export async function getServerSideProps() {
  const base = process.env.API_BASE_URL || "http://api:3000";
  try {
    const res = await fetch(`${base}/products`);
    const data = await res.json();
    return { props: { initial: data } };
  } catch (e) {
    return {
      props: { initial: { products: [], count: 0, error: "API unreachable" } },
    };
  }
}

export default function Home({ initial }) {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>{process.env.NEXT_PUBLIC_APP_NAME || "Stage3 Web"}</h1>
      <p>SSR fetch from API (service name: api)</p>
      <pre>{JSON.stringify(initial, null, 2)}</pre>
      <p>
        Client route proxy example: <a href="/api/products">/api/products</a>
      </p>
    </main>
  );
}
