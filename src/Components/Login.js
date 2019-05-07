import React, { Component } from "react";
import { Dropbox } from 'dropbox';
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUrl: '',
    };
  }

  componentDidMount () {
    let dbx = new Dropbox({ clientId: 'kocks4sd5s0co63' });
    this.setState({ authUrl: dbx.getAuthenticationUrl('http://localhost:3000/auth') });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div>
          <a href={this.state.authUrl} target="_blank" rel="noopener noreferrer">Login</a>
        </div>
      </>
    );
  }
}
export default Login;
