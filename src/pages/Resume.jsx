import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import ResumeMain from '../components/resume-main/ResumeMain';

function Resume() {
  return (
    <main>
      <Header text="Currículo" className="resume-header" />
      <ResumeMain inMainSection home portfolio about />
      <Footer />
    </main>
  );
}
export default Resume;
