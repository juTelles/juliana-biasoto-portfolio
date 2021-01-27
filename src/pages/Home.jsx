import './../styles/home.css';
import HomeHeader from '../components/home-components/HomeHeader';
import MainSection from './../components/home-components/MainSection';
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
