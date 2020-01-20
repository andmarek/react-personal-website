import React from 'react';
import ReactRouter, { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

/* Components */
import NavBar from './components/Nav'
/* Scenes */
import Home from './scenes/Home';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/test">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function About() {
  return <h2> About </h2>
}

export default App;
