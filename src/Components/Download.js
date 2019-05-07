import React, { Component } from "react";
import { Dropbox, DropboxBase } from 'dropbox';
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    const TEMP_PATH = "/foo/UX.png";
    
    let ACCESS_TOKEN = localStorage.token;
    let dbx = new Dropbox({ accessToken: ACCESS_TOKEN });

    dbx.filesGetTemporaryLink({ path: TEMP_PATH })
      .then((response) => {
        window.location.href = response.link;
      })
      .catch((err) => {
        console.log(err);
      })
    
  }

  render() {
    return (
      <button onClick={this.onClick}>Download</button>
    );
  }
}
export default Login;