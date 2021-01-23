import './../styles/home.css';
import HomeHeader from '../components/home/HomeHeader';
import MainSection from './../components/home/MainSection';
import Sticker from '../components/Sticker';

function Home() {
  return (
    <main>
      <HomeHeader/>
      <MainSection/>
      <Sticker text="Contato"/>
    </main>
  );
}

export default Home;
