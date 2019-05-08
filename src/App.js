import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './Components/welcome'
import Login from './Components/Login'
import Nav from './Components/Navigation'
import Auth from './Components/Auth'
import './App.css';
import Home from './Components/home'

function App() {
  const [token, updateToken] = useState(window.localStorage.getItem("token") || null);

  return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Welcome} />
          <Route exact path='/auth' render={(props) => <Auth {...props} onReceiveToken={updateToken} />} />
          <Route path='/login' component={Login} />
          <Route path='/home' component={Home} />
        </div>
      </Router>
  );
}

export default App;