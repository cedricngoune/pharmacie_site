import { routes } from '../Components/routes';
import Header from '../pages/Header/header';
import './app.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import "antd/dist/antd.css";

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
            />
        ))}
      </Switch>
    </Router>
 
  );
}

export default App;
