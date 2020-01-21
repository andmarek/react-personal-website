import React from 'react';
import ReactRouter, { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import styled from 'styled-components';

import './App.css';

/* Components */
import NavBar from './components/Nav'
/* Scenes */
import Home from './scenes/Home';
import Project from './scenes/Project';
import About from './components/About';

const Styles = styled.div`
  background-color: #fbf1c7;
`;

function App() {
  return (
    <Router>
      <div>
        <Styles>
        <NavBar />
        <Switch>
          <Route path="/test">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
        </Switch>
        </Styles>      
        </div>
    </Router>
  );
}


export default App;
