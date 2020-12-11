import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import NavLinkItem from "./components/NavLinkItem";
import Indexes from "./pages/Indexes";
import Markets from "./pages/Markets";
import Currencies from "./pages/Currencies";
import Crypto from "./pages/Crypto";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Stock Market</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <ul className="nav">
            <NavLinkItem to="/" text="Indexes" />
            <NavLinkItem to="/markets" text="Markets" />
            <NavLinkItem to="/currencies" text="Currencies" />
            <NavLinkItem to="/crypto" text="Crypto" />
          </ul>
        </div>
      </div>

      <Switch>
        <Route path="/">
          <Indexes />
        </Route>

        <Route path="/markets">
          <Markets />
        </Route>

        <Route path="/currencies">
          <Currencies />
        </Route>

        <Route path="/crypto">
          <Crypto />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
