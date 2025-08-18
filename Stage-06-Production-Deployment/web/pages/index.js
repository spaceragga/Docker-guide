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
      <h1>{process.env.NEXT_PUBLIC_APP_NAME || "Stage6 Web"}</h1>
      <p>SSR fetch from API behind hardened services</p>
      <pre>{JSON.stringify(initial, null, 2)}</pre>
      <p>
        Proxy route: <a href="/api/products">/api/products</a>
      </p>
    </main>
  );
}
