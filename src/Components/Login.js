import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div>
          <p>login</p>
        </div>
      </>
    );
  }
}
export default Login;
