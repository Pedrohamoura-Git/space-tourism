import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <Navbar />
            <div className="content">
              {/* <Switch>
                <Route path="/">
                  <Home />
                </Route>
              </Switch> */}
            </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
