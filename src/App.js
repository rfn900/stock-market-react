import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'

function App() {
  return (
    <div className="container">
      
      <Header />
      
      <Switch>
        <Route path="/indexes">
          <h1>Indexes page</h1>
          
        </Route>
        <Route path="/markets">
          <h1>Markets page</h1>
          
        </Route>
        <Route path="/currencies">
          <h1>Currencies page</h1>
          
        </Route>
        <Route path="/crypto">
          <h1>Crypto page</h1>
        </Route>
        <Route path="/"> 
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
