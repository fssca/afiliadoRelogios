import Link from "next/link";

export default function Home() {
  return (
    <main className="container main-content">

      {/* BANNER */}
      <section className="home-banner">
        <h1>Relógios com estilo e qualidade</h1>
        <p>Modelos selecionados com excelente custo-benefício</p>

        <Link href="/produtos">
          <button className="btn-primary">
            Ver catálogo
          </button>
        </Link>
      </section>

      {/* DESTAQUES */}
      <section className="home-products">
        <h2>Destaques</h2>

        <div className="product-grid">

          <div className="product-card">
            <img src="/relogio1.jpg" alt="Relógio Preto" />
            <h3>Relógio Seculus Preto</h3>
          </div>

          <div className="product-card">
            <img src="/relogio2.jpg" alt="Relógio Azul" />
            <h3>Relógio Seculus Azul</h3>
          </div>

        </div>
      </section>

    </main>
  );
}