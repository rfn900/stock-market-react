import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import InstrumentListPage from './pages/InstrumentListPage'
import InstrumentDetailsPage from './pages/InstrumentDetailsPage'

function App() {
  return (
    <div className="container">
      
      <Header />
      
      <Switch>

        <Route path="/markets/:marketId/:id" component={InstrumentDetailsPage}/>

        <Route path="/indexes/:id" component={InstrumentListPage}/>

        <Route path="/markets/:id" component={InstrumentListPage}/>
       
        <Route path="/currencies/:id" component={InstrumentListPage}/>

        <Route path="/crypto/:id" component={InstrumentListPage}/>


        <Route path="/indexes" component={InstrumentListPage}/>

        <Route path="/markets" component={InstrumentListPage}/>
       
        <Route path="/currencies" component={InstrumentListPage}/>

        <Route path="/crypto" component={InstrumentListPage}/>

        <Route path="/"> 
          <MainPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
