import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import AnitquePage from './ANITQUE/pages/AnitquePage';
import NatashaPage from './NATASHA/pages/NatashaPage'
import VenissaPage from './VENISSA/Pages/VenissaPage'
import KamiliaPage from './KAMILIA/Pages/KamiliaPage'
import MalikoPage from './MALIKO/pages/MalikoPage';
import MikeyPage from './MICKEY/pages/MikeyPage'
import MatheldaPage from './MATHELDA/Pages/MatheldaPage';
import ScrimbaPage from './SCRIMBA/Pages/ScrimbaPage';
import Home from './Home/Home';
// import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  
  return (
    <div className="app">

      <div className="app__body">
        <Router>
          <Switch>
              <Route  path="/antique" exact>
                <AnitquePage />
              </Route>

              <Route path='/natasha'>
                <NatashaPage />
              </Route>

              <Route path="/venissa"> 
                <VenissaPage />
              </Route>

              <Route path='/kamilia'>
                <KamiliaPage />
              </Route>

              <Route path='/maliko'>
                <MalikoPage />
              </Route>

              <Route path="/mikey">
                <MikeyPage />
              </Route>

              <Route path='/mathelda'>
                <MatheldaPage />
              </Route>

              <Route path="/scrimba">
                <ScrimbaPage />
              </Route>
            

              <Route path="/">
                <Home />
              </Route>
              
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
