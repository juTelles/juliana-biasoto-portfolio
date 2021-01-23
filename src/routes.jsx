import About from './pages/About';
import Home from './pages/Home';
import portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const routes = [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/portfolio',
    component: portfolio,
  },
  {
    path: '/resume',
    component: Resume,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routes;
