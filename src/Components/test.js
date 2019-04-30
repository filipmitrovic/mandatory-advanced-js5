import React from 'react';
import { Dropbox } from 'dropbox';
import './App.css';

function App() {
  var dbx = new Dropbox({ clientId: 't82fnfyg4xi31cd' });
  var authUrl = dbx.getAuthenticationUrl('http://localhost:3000/');
  return (
    <div>
      <p>{authUrl}</p>
    </div>
  );
}

export default App;