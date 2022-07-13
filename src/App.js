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
        <div className='wrapper'>
          <Navbar />
            <div className="content">
              <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/destination" exact component={ destination } />
              </Switch>
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
