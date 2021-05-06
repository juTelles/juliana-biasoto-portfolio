import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

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
