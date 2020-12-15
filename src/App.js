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
        <Route path="/:category/:section" component={InstrumentListPage}/>
        <Route path="/:category" component={InstrumentListPage}/>

        <Route path="/"> 
          <MainPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
