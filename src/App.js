import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <Navbar />
        </header>
            <div className="content">
              {/* <Switch>
                <Route path="/">
                  <Home />
                </Route>
              </Switch> */}
            </div>
      </div>
    </Router>
  );
}

export default App;
