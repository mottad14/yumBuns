import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from "react-router-dom";
import {useState, useEffect} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Main from './views/Main';
import Login from './views/Login'
import NewAccount from "./views/NewAccount"
import Create from './views/Create';
import Recipe from './views/Recipe';
import SubscribePop from './components/SubscribePop';
import Account from './components/Account';
import ProtectedRoute from './components/ProtectedRoute';
import AlertMessage from './components/AlertMessage';

import { AuthContextProvider } from "./contexts/AuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";



function App() {
  const [timedPopup, setTimedPopup] = useState (false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true)
    }, 3000)
  }, [])


  return (
    
    <div className="App" >
          <div className="container">
              <AuthContextProvider>
                <NavBar/>
                  <Switch>
                    <Route exact path="/">
                      <Main/>
                    </Route>

                    <Route exact path="/login" trigger={timedPopup} setTrigger={setTimedPopup}>
                      <Login/>
                    </Route>

                    <Route exact path="/signup" trigger={timedPopup} setTrigger={setTimedPopup}>
                      <NewAccount/>
                    </Route>

                    <Route path="/view/single/:_id">
                      <Recipe/>
                    </Route>

                    <Route exact path="/create">
                      <ProtectedRoute>   <Create/>  </ProtectedRoute>
                    </Route>

                    <Route exact path="/loginAlert">
                      <AlertMessage/>
                      <Main/>
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
