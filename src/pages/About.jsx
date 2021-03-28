import AboutMain from '../components/about-main/AboutMain';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Container from '../components/container/Container';

function About() {
  return (
    <Container>
      <Header title="Sobre Mim" className="about-header" home portfolio resume/>
      <AboutMain />
      <Footer />
    </Container>
  );
}

export default About;
