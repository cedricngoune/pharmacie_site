import { routes } from '../Components/routes';
import Header from '../Components/Header/header';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import "antd/dist/antd.css";
import { Footer } from '../Components/footer/footer';

function App() {
  return (
    <Router>
      <div className="page-container">
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
      </div>
      <Footer />
    </Router>
 
  );
}

export default App;
