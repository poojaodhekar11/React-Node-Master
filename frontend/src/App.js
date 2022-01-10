//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Employee from './components/Employee';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contacts" exact component={Contact} />
            <Route exact path="/employee/:id" component={Employee} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
