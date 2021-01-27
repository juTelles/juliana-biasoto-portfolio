import MainSectionAbout from '../components/main-about/MainSectionAbout';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function About() {
  return (
    <main>
      <Header text="Sobre Mim" className="about-header" home portfolio resume />
      <MainSectionAbout />
      <Footer />
    </main>
  );
}

export default About;
