import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function OldAuctionPage() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <title>Auction Page</title>
      </head>
      <body>
        <main className="page">
          <Header />
          <section className="content" style={{ padding: '32px' }}>
            <div className="card">
              <h2>Auction Page</h2>
              <p>This is the old auction page structure integrated into React.</p>
            </div>
          </section>
          <Footer />
        </main>
      </body>
    </>
  );
}
