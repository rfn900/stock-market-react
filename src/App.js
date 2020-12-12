import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import InstrumentListPage from './pages/InstrumentListPage'
import InstrumentDetailPage from './pages/InstrumentDetailPage'


function App() {
  return (
    <div className="container">
      
      <Header />
      
      <Switch>
  
        <Route path={`/:category/:section/:id`} component={InstrumentDetailPage}/>
        {/* <Route path={`/markets/:section/:id`} component={InstrumentDetailPage}/>
        <Route path={`/currencies/:section/:id`} component={InstrumentDetailPage}/>
        <Route path={`/crypto/:section/:id`} component={InstrumentDetailPage}/> */}


        <Route path="/:category/:id" component={InstrumentListPage}/>
        {/* <Route path="/markets/:id" component={InstrumentListPage}/>
        <Route path="/currencies/:id" component={InstrumentListPage}/>
        <Route path="/crypto/:id" component={InstrumentListPage}/> */}


        <Route path="/:category" component={InstrumentListPage}/>
        {/* <Route path="/markets" component={InstrumentListPage}/>
        <Route path="/currencies" component={InstrumentListPage}/>
        <Route path="/crypto" component={InstrumentListPage}/> */}

        <Route path="/"> 
          <MainPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
