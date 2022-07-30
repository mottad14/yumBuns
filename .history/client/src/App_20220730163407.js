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
import eating from "./imgs/subscribe.svg"
import ProtectedRoute from './components/ProtectedRoute';
import Account from './components/Account';



function App() {
  const [timedPopup, setTimedPopup] = useState (false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true)
    }, 45000)
  }, [])


  return (
    
    <div className="App" >

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
                      <ProtectedRoute>   <Create/>  </ProtectedRoute>
                    </Route>

                    <Route exact path="/account">
                      <ProtectedRoute>   <Account/>  </ProtectedRoute>
                    </Route>
                  </Switch>

                  <SubscribePop trigger={timedPopup} setTrigger={setTimedPopup}>
                  </SubscribePop>
              </AuthContextProvider>

       </div>
    </div>
  );
}

export default App;
