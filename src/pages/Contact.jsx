import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Contact() {
  return (
    <main>
      <Header
        title="Contate me"
        className="contact-header"
        home
        portfolio
        resume
        about
      />
      <Footer />
    </main>
  );
}

export default Contact;
