import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Dropbox } from 'dropbox';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filelist:""
    }; 
  }
  componentDidMount(){
    const accessToken = localStorage.token;
    console.log(accessToken)
    const dbx = new Dropbox({
      accessToken,
      fetch
    });
    dbx.filesListFolder({
      path: ''
    }).then(
      response => {
        this.setState({filelist:response})
        console.log(this.state.filelist)
      })
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Home s</title>
        </Helmet>
        <div>
          <p>home</p>
        </div>
      </>
    );
  }
}
export default Home;
