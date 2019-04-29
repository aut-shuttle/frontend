import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "tabler-react/dist/Tabler.css";



import LoginPage from "./components/LoginPage.react";
import RegisterPage from "./components/RegisterPage.react";
import HomePage from "./components/HomePage.react";



type Props = {||};

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}
export default App;