import AboutMain from '../components/about-main/AboutMain';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function About() {
  return (
    <main>
      <Header text="Sobre Mim" className="about-header" home portfolio resume hasNavBar/>
      <AboutMain />
      <Footer />
    </main>
  );
}

export default About;
