import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import InstrumentListPage from "./pages/InstrumentListPage";
import NavLinkItem from "./components/NavLinkItem";
import Indexes from "./pages/Indexes";
import Markets from "./pages/Markets";
import Currencies from "./pages/Currencies";
import Crypto from "./pages/Crypto";

function App() {
  return (
    <div className="container">
      <div className="row">
        <ul className="nav">
          <NavLinkItem to="/" text="Indexes" />
          <NavLinkItem to="/markets" text="Markets" />
          <NavLinkItem to="/currencies" text="Currencies" />
          <NavLinkItem to="/crypto" text="Crypto" />
        </ul>
      </div>

      <Switch>
        <Route path="/"></Route>

        <Route path="/markets"></Route>

        <Route path="/currencies"></Route>

        <Route path="/crypto"></Route>
      </Switch>
    </div>
  );
}

export default App;
