import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { MailisOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
function App() {
  const dispatch = useDispatch();
  const isOpenMail_ = useSelector(MailisOpen);
  const user = useSelector(selectUser);
 console.log(user);
 useEffect(() => {
   auth.onAuthStateChanged(user =>{
     if(user){
      dispatch(login({
        displayName:user.displayName,
        email:user.email,
        photoUrl:user.photoURL,
      }))
     }else{

     }
   })
 }, []);
  return (
    <Router>
      {!user 
       ? (<Login />)
       :
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {console.log(isOpenMail_)}
          {isOpenMail_ && <SendMail />}
        </div>
      }
    </Router>
  );
}

export default App;
