import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }; 
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div>
          <p>home</p>
        </div>
      </>
    );
  }
}
export default Home;
