import React from "react";
import { Router } from "@reach/router";
import Layout from "../../components/Layout.js";
import Login from "../../components/Login.js";
import Default from "../../components/Default.js";
// import PrivateRoute from "../../components/PrivateRoute";

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Login path="/login" />
        <Default path="/" />
      </Router>
    </Layout>
  );
};

export default App;
