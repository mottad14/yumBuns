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
import SuccessMessage from './components/SuccessMessage';
import RecipeCreatedAlert from './components/RecipeCreatedAlert';
import EditRecipe from './views/EditRecipe';
import SuccessDelete from './components/SuccessDelete';



function App() {
  const [timedPopup, setTimedPopup] = useState (false);
  const [loggedIn, setLoggedIn] = useState();
  const [hasTriggered, setHasTriggered] = useState(false);
  const [userID, setUserID] = useState();



  useEffect(() => {

  const auth = getAuth();
  
  onAuthStateChanged(auth, (user) => {
  if (user) {
    setLoggedIn(true);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    setUserID(uid)
    console.log(`Current user id: ${uid}`)
    // ...
  } else if(!hasTriggered) {
    // User is signed out
    setHasTriggered(true)
    setTimeout(() => {
      setTimedPopup(true)
      
    }, 45000)
  }}, [])
    
  })
  console.log("The user is currently logged in:", loggedIn)

    


  return (
    
    <div className="App" >
          <div className="container">
              <AuthContextProvider>
                <NavBar loggedIn={loggedIn} />
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
                      <Recipe userID={userID}/> 
                    </Route>

                    <Route path="/edit/:_id">
                        <ProtectedRoute>              
                            <EditRecipe userID={userID}/>
                        </ProtectedRoute>
                    </Route>

                    <Route exact path="/successDelete">
                      <ProtectedRoute>              
                          <SuccessDelete/>
                          <Main/>
                      </ProtectedRoute>
                    </Route>

                    <Route exact path="/create">
                      <ProtectedRoute>   <Create userID={userID}/>  </ProtectedRoute>
                    </Route>

                    <Route exact path="/recipePosted">
                      <ProtectedRoute>              
                          <RecipeCreatedAlert/>
                          <Main/>
                      </ProtectedRoute>
                     </Route>

                    <Route exact path="/loginAlert">
                      <AlertMessage/>
                      <Main/>
                    </Route>

                    <Route exact path="/success">
                      <ProtectedRoute>              
                          <SuccessMessage/>
                          <Main/>
                      </ProtectedRoute>
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
