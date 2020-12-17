import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './pages/MainPage'
import InstrumentListPage from './pages/InstrumentListPage'
import InstrumentDetailPage from './pages/InstrumentDetailPage'
import FavoritesPage from './pages/FavoritesPage'

function App() {
  return (
    <div>
      
      <Header />
      <div className="container">
        <Switch>
          
          <Route path="/favorites" component={FavoritesPage}/>
          <Route path="/:category/:section/:id" component={InstrumentDetailPage}/>
          <Route path="/:category/:section" component={InstrumentListPage}/>
          <Route path="/:category" component={InstrumentListPage}/>
          <Route path="/" component={MainPage}/> 
            
        </Switch>

      </div>
      
      <Footer />

    </div>
  );
}

export default App;
