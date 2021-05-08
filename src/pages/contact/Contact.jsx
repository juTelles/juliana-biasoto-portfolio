import ContactMain from '../../components/contact-main/ContactMain';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function Contact() {
  
  return (
    <main>
      <Header
        title="Contato"
        className="contact-header"
        home
        portfolio
        resume
        about
      />
      <ContactMain/>
      <Footer />
    </main>
  );
}

export default Contact;
