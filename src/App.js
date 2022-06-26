import { 
  BrowserRouter as 
  Router, 
  Route, 
  Switch 
} from 'react-router-dom';

import './assets/scss/index.scss';

import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <div className='wrapper'>
          <Navbar />
            <div className="content">
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
