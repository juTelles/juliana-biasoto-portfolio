import Header from '../components/header/Header';
import Container from '../components/container/Container';
import ResumeMain from '../components/resume-main/ResumeMain';
import './../styles/index.css';

function Resume() {
  return (
    <Container>
      <Header
        title="Currículo"
        className="resume-header"
        home
        portfolio
        about
        contact
      />
      <ResumeMain />
    </Container>
  );
}
export default Resume;
