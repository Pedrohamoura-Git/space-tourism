import { 
  BrowserRouter as 
  Router, 
  Route, 
  Switch 
} from 'react-router-dom';

import './assets/scss/index.scss';

// Pages
import Home from './pages/Home';
import destination from './pages/destination';
// Components
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/destination" exact component={ destination } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
