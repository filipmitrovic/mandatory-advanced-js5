import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import qs from "query-string";

function Auth(props) {
  const [isAuthenticated, updateIsAuthenticated] = useState(false);

  function getAccessTokenFromUrl() {
    const params = qs.parse(props.location.hash);
    return params.access_token;
  }

  useEffect(() => {
    const token = getAccessTokenFromUrl();
    window.localStorage.setItem("token", token);
    props.onReceiveToken(token);
    updateIsAuthenticated(true);
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return <p>Loading...</p>;
}
export default Auth;