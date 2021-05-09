import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import HomePage from './pages/home/HomePage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ResumePage from './pages/resume/ResumePage';

const routes = [
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/portfolio',
    component: PortfolioPage,
  },
  {
    path: '/resume',
    component: ResumePage,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
  {
    path: '/',
    component: HomePage,
  },
];

export default routes;
