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
import Home from "./pages/Home";

function App() {
  return (
    <>
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">
            <Link to={"/home"}>Stock Market</Link>
          </h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <NavLinkItem to="/indexes" text="Indexes" />
            <NavLinkItem to="/markets" text="Markets" />
            <NavLinkItem to="/currencies" text="Currencies" />
            <NavLinkItem to="/crypto" text="Crypto" />
          </nav>
        </div>
      </header>

      <main className="px-3">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

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
      </main>
      <footer class="mt-auto text-white-50">
        <p>
          Cover template for{" "}
          <a href="https://getbootstrap.com/" class="text-white">
            Stock Market
          </a>
          , by{" "}
          <a href="https://twitter.com/mdo" class="text-white">
            @mdo
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
