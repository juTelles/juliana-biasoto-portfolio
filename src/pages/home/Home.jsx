import HomeHeader from '../../components/home-components/home-header/HomeHeader';
import HomeMain from '../../components/home-components/home-main/HomeMain';
import Footer from '../../components/footer/Footer';

function Home() {

  return (
    <main>
      <HomeHeader/>
      <HomeMain isHome/>
      <Footer/>
    </main>
  );
}

export default Home;
