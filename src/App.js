import React, { useEffect } from 'react';
import WebcamCapture from './WebcamCapture';

import './App.css';
import { BrowserRouter as Router, 
  Switch,
  Route } from 'react-router-dom';
import Preview from './Preview';
import Chats from './Chats'
import ChatView from './ChatView'
// import Cam from './Cam'
import {login, logout, selectUser } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import Campwa from './Campwa';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=> {
    auth.onAuthStateChanged((authUser)=>{
      if (authUser) {
        dispatch(login({
          username:authUser.displayName,
          profilePic:authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout())
      }
      })
  },[])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):(
          <>
          <img className='app__logo' src="https://pbs.twimg.com/profile_images/1324384358418042880/A-ENfuMC_400x400.jpg" alt="" />
          <div className="app__body">
            <div className="app__bodyBackground">
              <Switch>
                <Route exact path="/chats/view">
                  <ChatView/>
                </Route>

                <Route exact path="/chats">
                  <Chats/>
                </Route>

                <Route exact path="/preview">
                  <Preview/>
                </Route>

                <Route exact path="/campwa">
                  <Campwa/>
                </Route>

                  <Route exact path="/">
                    <WebcamCapture/>
                  </Route>
                </Switch>
            </div>

          
        </div>
          </>
        )}
        
      </Router>
      
      
    </div>
  );
}

export default App;
