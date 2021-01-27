import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './../styles/resume.css';

function Resume() {
  return (
    <main>
      <Header text="Currículo" className="resume-header" home portfolio about />

      <Footer />
      <div className="resume-div">
        <div className="resume"></div>
      </div>
    </main>
  );
}
export default Resume;
