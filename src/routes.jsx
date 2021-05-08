import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';

const routes = [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/portfolio',
    component: Portfolio,
  },
  {
    path: '/resume',
    component: Resume,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routes;
