import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import NavLinkItem from "./components/NavLinkItem";
import Indexes from "./pages/Indexes";
import Markets from "./pages/Markets";
import Currencies from "./pages/Currencies";
import Crypto from "./pages/Crypto";
import InstrumentListPage from "./pages/InstrumentListPage";
import InstrumentListPage2 from "./pages/InstrumentListPage2";
import InstrumentListPage3Detail from "./pages/InstrumentListPage3Detail";

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
            <div className="card col-6">
              <NavLinkItem to="/" text="Indexes" />
            </div>
            <div className="card col-6">
              <NavLinkItem to="/markets" text="Markets" />
            </div>
            <div className="card col-6">
              <NavLinkItem to="/currencies" text="Currencies" />
            </div>
            <div className="card col-6">
              <NavLinkItem to="/crypto" text="Crypto" />
            </div>
          </ul>
        </div>
      </div>

      <Switch>
        <Route path="/markets/:nameOfMarket/:nameOfMarket2">
          <InstrumentListPage3Detail />
        </Route>

        <Route path="/markets/:nameOfMarket">
          <InstrumentListPage2 />
        </Route>

        <Route path="/markets">
          <InstrumentListPage />
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

        <Route path="/">
          <Indexes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
