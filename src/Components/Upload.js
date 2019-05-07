import React, { Component } from "react";
import { Dropbox } from 'dropbox';
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.inputRef = React.createRef(null);
  }

  onSubmit(e) {
    e.preventDefault();
    const file = this.inputRef.current.files[0];
    const newFile = Array.from(file).map(URL.createObjectURL);
    let ACCESS_TOKEN = localStorage.token;
    let dbx = new Dropbox({ accessToken: ACCESS_TOKEN });
    dbx.filesUpload({path: '/' + file.name, contents: file})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="file" multiple/>
        <button type="submit">Upload</button>
      </form>
    );
  }
}
export default Login;