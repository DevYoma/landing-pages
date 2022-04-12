import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AnitquePage from './ANITQUE/pages/AnitquePage';
import NatashaPage from './NATASHA/pages/NatashaPage'
import VenissaPage from './VENISSA/Pages/VenissaPage'
import KamiliaPage from './KAMILIA/Pages/KamiliaPage'
import MalikoPage from './MALIKO/pages/MalikoPage';
import MikeyPage from './MICKEY/pages/MikeyPage'
import MatheldaPage from './MATHELDA/Pages/MatheldaPage';
import ScrimbaPage from './SCRIMBA/Pages/ScrimbaPage';
// import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }

  const subtract = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }
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
                <h1>Welcome to this page</h1>
                <Link to="/antique">Antique Page Design</Link>
                Built with Love 💖 by Yoma <br />
                <Link to="/natasha">Natasha Page Design</Link><br />
                <Link to="/venissa"> 
                  Venissa Page Design
                </Link> <br />
                <Link to='/kamilia'>
                  Kamilia Page Design
                </Link> <br />
                <Link to='/maliko'>
                  Maliko Page Design
                </Link> <br />
                <Link to="/mikey">  
                  Mikey Page Design
                </Link> <br />
                <Link to='/mathelda'>
                  Mathelda Page Design
                </Link> <br />
                <Link to='/scrimba'>
                  Scrimba Animation Course
                </Link>

                <h1>{count}</h1>

                <div>
                  <button onClick={add}>Add</button>
                  <button onClick={subtract}>Subtract</button>
                  <button onClick={reset}>Reset</button>
                </div>
                

                {/* <TwitterLink /> */}
              </Route>
              
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
