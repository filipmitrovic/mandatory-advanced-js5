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
    let dbx = new Dropbox({ clientId: 't82fnfyg4xi31cd' });
    this.setState({ authUrl: dbx.getAuthenticationUrl('http://localhost:3000/auth') })
    // let dbxGet = new Dropbox({ accessToken: Auth.getAccessTokenFromUrl() });
    // dbxGet.filesListFolder({path: ''})
    //   .then((response) => {
    //     console.log(response.entries);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Login-</title>
        </Helmet>
        <div>
          <a href={this.state.authUrl} target="_blank" rel="noopener noreferrer">Login</a>
        </div>
      </>
    );
  }
}
export default Login;
