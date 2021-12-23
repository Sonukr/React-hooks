import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "Features/Login";
import Emojis from "Features/Emojis";
import EmojisWithCustomHooks from "Features/Emojis/emojisWithCustomHooks";
import NotFound from "./404";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/emojis" component={Emojis} />
        <Route
          exact
          path="/emojisWithCustomHooks"
          component={EmojisWithCustomHooks}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
