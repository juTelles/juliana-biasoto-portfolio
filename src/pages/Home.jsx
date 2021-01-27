import './../styles/home.css';
import HomeHeader from '../components/home/HomeHeader';
import MainSection from './../components/home/MainSection';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <main>
      <HomeHeader/>
      <MainSection/>
      <Footer/>
    </main>
  );
}

export default Home;
