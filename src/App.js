import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
