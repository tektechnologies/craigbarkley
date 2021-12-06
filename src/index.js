
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Landing2 from "views/examples/Landing-2.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route
        path="/landing-page2"
        exact
        render={props => <Landing2 {...props} />}
      />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />

      <Route path='/linkedin' component={() => { 
        window.location.href = 'https://www.linkedin.com/in/craig-barkley-25017b65/'; 
        return null;
   }}/>
      <Route path='/github' component={() => { 
        window.location.href = 'https://github.com/tektechnologies'; 
        return null;
    }}/>
    <Route path='/wookone' component={() => { 
      window.location.href = 'https://www.wookone.com'; 
      return null;
  }}/>

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
