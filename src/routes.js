import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./componentes/Home";
import Info from "./componentes/Info";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/info" component={Info} />
      </Switch>
    </BrowserRouter>
  );
}
