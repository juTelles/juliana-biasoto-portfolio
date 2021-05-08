import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import PortfolioMain from '../../components/portfolio-main/PortfolioMain';

function portfolio() {
  return (
    <main>
      <Header title="Portfolio" className="portfolio-header" home about resume contact/>
      <PortfolioMain/>
      <Footer />
    </main>
  );
}

export default portfolio;
