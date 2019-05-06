import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import Nav from './Components/Navigation'
import Auth from './Components/Auth'
import './App.css';

function App() {
  const [token, updateToken] = useState(window.localStorage.getItem("token") || null);

  return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path='/auth' render={(props) => <Auth {...props} onReceiveToken={updateToken} />} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
  );
}

export default App;