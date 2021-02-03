import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function portfolio() {
  return (
    <main>
      <Header text="Portfolio" className="portfolio-header" home about resume hasNavBar/>

      <Footer />
    </main>
  );
}

export default portfolio;
