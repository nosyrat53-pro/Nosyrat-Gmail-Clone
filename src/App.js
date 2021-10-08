import React , { useEffect } from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom' ;
import { Route } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList' ;
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice' ;
import Login from './Login' ;
import { auth } from './firebase' ;
import { setUserLogin } from './features/userSlice';
import { useDispatch } from 'react-redux';

function App() {
  
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen) ;
  const user = useSelector(selectUser) ;

  const dispatch = useDispatch();
  
  useEffect( () => { 
    auth.onAuthStateChanged( user => {
      if(user) {
        dispatch(setUserLogin({...user}));
      }
    })
  } ,[]);

  return (
    <Router>

    {user ? 

      <div className="app">
        <Header />
        <div className="app__body">
          <SideBar />    

          <Switch>

            <Route exact path="/">
              <EmailList />
            </Route>

            <Route path="/mail">
              <Mail />
            </Route>

          </Switch>   

         { sendMessageIsOpen && <SendMail />}

        </div>

      </div>

    : <Login /> }
    </Router>
  );
}

export default App;
