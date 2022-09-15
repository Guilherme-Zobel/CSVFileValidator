import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ValidatePage from "../pages/ValidatePage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/validate" exact>
          <ValidatePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
