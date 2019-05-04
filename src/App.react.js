import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "tabler-react/dist/Tabler.css";



import LoginPage from "./components/login/LoginPage.react";
import RegisterPage from "./components/register/RegisterPage.react";
import HomePage from "./components/home/HomePage.react";
import ProfilePage from './components/profile/ProfilePage.react';
import ChangePasswordPage from './components/profile/ChangePasswordPage.react';
import LogoutPage from './components/profile/LogoutPage.react';

function App(){
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
		  <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/changePassword" component={ChangePasswordPage} />
		  <Route exact path="/logout" component={LogoutPage} />
		  
        </Switch>
      </Router>
    </React.StrictMode>
  );
}
export default App;
