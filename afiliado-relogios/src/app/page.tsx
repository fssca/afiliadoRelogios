import Link from "next/link";

export default function Home() {
  return (
    <main className="container main-content">

      {/* BANNER */}
      <a href="/produtos" className="home-banner">
        <div className="home-banner-content"> 
        </div>
        <span className="btn-primary">Ver os Modelos →</span>
      </a>

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