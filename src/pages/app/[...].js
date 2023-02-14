import React from "react";
import { Router } from "@reach/router";
import SiteLayout from "../../components/SiteLayout.js";
import Details from "../../components/Details.js";
import Profile from "../../components/Profile.js";
import Login from "../../components/Login.js";
import Default from "../../components/Default.js";
import PrivateRoute from "../../components/PrivateRoute";

const App = () => {
  return (
    <SiteLayout>
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/details" component={Details} />
        <Login path="/login" />
        <Default path="/" />
      </Router>
    </SiteLayout>
  );
};

export default App;
