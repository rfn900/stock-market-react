import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import InstrumentListPage from "./pages/InstrumentListPage";
import InstrumentDetailPage from "./pages/InstrumentDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import SearchPage from "./pages/SearchPage";

const Container = styled.div`
  padding: 1em;
  width: 100%;
  max-width: 90em;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fafafa;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/favorites" component={FavoritesPage} />
          <Route
            path="/:category/:section/:id"
            component={InstrumentDetailPage}
          />
          <Route path="/:category/:section" component={InstrumentListPage} />
          <Route path="/:category" component={InstrumentListPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Container>

      <Footer />
    </Wrapper>
  );
}

export default App;
