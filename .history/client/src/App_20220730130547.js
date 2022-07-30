import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Main from './views/Main';
import Login from './views/Login'
import NewAccount from "./views/NewAccount"
import Create from './views/Create';
import Recipe from './views/Recipe';
import SubscribePop from './components/SubscribePop';
import {useState, useEffect} from 'react'
import { AuthContextProvider } from "./contexts/AuthContext";
import eating from "./imgs/cooking.svg"



function App() {
  const [timedPopup, setTimedPopup] = useState (false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true)
    }, 45000)
  }, [])


  return (
    
    <div className="App" onLoad={ () => { !img ? style={{ backgroundImage: `url(${eating})` }}}} >
      <div >

          <div className="">
              <AuthContextProvider>
                <NavBar/>
                  <Switch>
                    <Route exact path="/">
                      <Main/>
                    </Route>

                    <Route exact path="/login">
                      <Login/>
                    </Route>

                    <Route exact path="/signup">
                      <NewAccount/>
                    </Route>

                    <Route path="/view/single/:_id">
                      <Recipe/>
                    </Route>

                    <Route exact path="/create">
                      <Create/>
                    </Route>
                  </Switch>

                  <SubscribePop trigger={timedPopup} setTrigger={setTimedPopup}>
                  </SubscribePop>
              </AuthContextProvider>

          </div>
       </div>
    </div>
  );
}

export default App;
