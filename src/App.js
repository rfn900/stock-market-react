import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import NavLinkItem from "./components/NavLinkItem";
import InstrumentListPage from "./pages/InstrumentListPage";
import InstrumentListPage2 from "./pages/InstrumentListPage2";
import InstrumentListPage3Detail from "./pages/InstrumentListPage3Detail";
import IndexSePage from "./pages/IndexesSePage";
import IndexesSePage2List from "./pages/IndexesSePage2List";
import IndexesSePage3Detail from "./pages/IndexesSePage3Detail";
import CurrenciesSekPage from "./pages/CurrenciesSekPage";
import CurrenciesSekPage2List from "./pages/CurrenciesSekPage2List";
import CurrenciesSekPage3Detail from "./pages/CurrenciesSekPage3Detail";
import CryptoUsdPage from "./pages/CryptoUsdPage";
import CryptoUsdPage2List from "./pages/CryptoUsdPage2List";
import CryptoUsdPage3Detail from "./pages/CryptoUsdPage3Detail";

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
              <NavLinkItem to="/indexes" text="Indexes" />
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
        <Route path="/crypto/:nameOfCrypto/:nameOfCrypto2">
          <CryptoUsdPage3Detail />
        </Route>

        <Route path="/crypto/:nameOfCrypto">
          <CryptoUsdPage2List />
        </Route>

        <Route path="/crypto">
          <CryptoUsdPage />
        </Route>

        <Route path="/markets/:nameOfMarket/:nameOfMarket2">
          <InstrumentListPage3Detail />
        </Route>

        <Route path="/markets/:nameOfMarket">
          <InstrumentListPage2 />
        </Route>

        <Route path="/markets">
          <InstrumentListPage />
        </Route>

        <Route path="/currencies/:nameOfCurrencies/:nameOfCurrencies2">
          <CurrenciesSekPage3Detail />
        </Route>

        <Route path="/currencies/:nameOfCurrencies">
          <CurrenciesSekPage2List />
        </Route>

        <Route path="/currencies">
          <CurrenciesSekPage />
        </Route>

        <Route path="/indexes/:nameOfIndexes/:nameOfIndexes2">
          <IndexesSePage3Detail />
        </Route>

        <Route path="/indexes/:nameOfIndexes">
          <IndexesSePage2List />
        </Route>

        <Route path="/indexes">
          <IndexSePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
