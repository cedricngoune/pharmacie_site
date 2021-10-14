import { routes } from '../Components/routes';
import Header from '../pages/Header/header';
import './app.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "antd/dist/antd.css";
import { Footer } from '../Components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <Route 
            exact 
            key={i} 
            path={route.path}
            component={route.component}
          > 
          </Route>
        ))}
      </Switch>
      <Redirect to="/home" />
      <Footer />
    </Router>
 
  );
}

export default App;
