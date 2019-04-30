import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import Nav from './Components/Navigation'
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
  );
}

export default App;