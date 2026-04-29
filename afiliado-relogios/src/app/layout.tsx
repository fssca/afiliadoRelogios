import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>

        {/* TOP ANNOUNCEMENT */}
        <div className="top-announcement">
          Envio com rastreio + 4x sem juros + garantia e suporte no Brasil
        </div>

        {/* HEADER */}
        <header>
          <div className="container header-wrapper">
            <div className="logo">
              <a href="/">
                <img src="/img/logo.webp" alt="Logo" />
              </a>
            </div>

            <div className="search-area">
              <input type="search" placeholder="O que você procura?" />
            </div>
          </div>
        </header>

        {/* MENU */}
        <nav className="menu-bar">
          <ul>
            <li><a href="#">Quem Somos</a></li>
            <li><a href="#">Relógios Seculos</a></li>
            <li><a href="#">Relógios Timex</a></li>
          </ul>
        </nav>

        {/* CONTEÚDO DINÂMICO */}
        {children}

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-columns">

            <div className="footer-column">
              <img src="/img/logo.webp" alt="Logo" height="40px"/>
              <p>
                Loja especializada em relógios, eletrônicos, acessórios e utilidades.
                Entrega com rastreio e suporte no Brasil.
              </p>
            </div>

            <div className="footer-column">
              <h4>Informações</h4>
              <ul>
                <li><a href="#">Perguntas Frequentes</a></li>
                <li><a href="#">Política de envio</a></li>
                <li><a href="#">Trocas e devoluções</a></li>
                <li><a href="#">Política de privacidade</a></li>
                <li><a href="#">Quem somos</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Atendimento</h4>
              <ul>
                <li>
                  <a href="https://wa.me/5519978239722">
                    WhatsApp
                  </a>
                </li>

                <li>
                  <a href="mailto:contato@hyperlojaecia.com.br">
                    contato@hyperlojaecia.com.br
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="container footer-payments">
            <img src="/icons/card-visa.svg" alt="Visa" />
            <img src="/icons/card-mastercard.svg" alt="Mastercard" />
            <img src="/icons/card-pix.svg" alt="Pix" />
            <img src="/icons/card-elo.svg" alt="Elo" />
            <img src="/icons/card-billet.svg" alt="Boleto" />
          </div>

          <div 
            className="safe-browsing-links">
            <a 
              href="https://transparencyreport.google.com/safe-browsing/search?url=hyperlojaecia.com.br&hl=pt_BR" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="https://raw.githubusercontent.com/fabiohyperloja/siteHyperLoja/143a5bbd8a100dacdb783f68a3907ed5443388c8/googlesafebrowsing.png" 
                alt="Site Verificado pelo Google Safe Browsing" 
                width="180"
              />
            </a>

            <div>
              <img 
                src="https://raw.githubusercontent.com/fabiohyperloja/siteHyperLoja/e28d6d86f6ed51f161c76a9281b97301788c8ce6/Medal267x249-bgw-Ebit-Jan2025-d01-Avaliacao-2.png" 
                alt="Selo Ebit 2025" 
                width="180"
              />
            </div>
          </div>

          <div className="footer-bottom">
            Rua Gabriel Idílio de Camargo 257 – Vila Pavan
            <br />
            © 2026 FABIO S SIQUEIRA - ME
            <br />
            CNPJ 54.010.781/0001-24
          </div>
        </footer>

      </body>
    </html>
  );
}