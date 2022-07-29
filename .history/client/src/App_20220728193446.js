import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Main from './views/Main';
import Create from './views/Create';
import Recipe from './views/Recipe';
import SubscribePop from './components/SubscribePop';
import {useState, useEffect} from 'react'
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState (false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true)
    }, 45000)
  }, [])


  return (
    
    <div className="App">
      <div className="">
          <NavBar/>
            <AuthContextProvider>
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>

            <Route path="/view/single/:_id">
              <Recipe/>
            </Route>

            <Route exact path="/create">
              <Create/>
            </Route>
          </Switch>
          
          <SubscribePop trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>This is my Pop Up</h3>
          </SubscribePop>

          <SubscribePop trigger={timedPopup} setTrigger={setTimedPopup}>
          </SubscribePop>
          

       </div>
    </div>
  );
}

export default App;
