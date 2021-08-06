import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './login.css'
import { Button } from '@material-ui/core';
function Login(props) {
    const dispatch = useDispatch();
    const Signin = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL,
            }))
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div className="login">
           <div className="login__container">
                <img src="https://www.clio.com/wp-content/uploads/2020/02/image-1-copy.png"/>
                <Button onClick={Signin}
                 className="btns"
                 style={{backgroundColor:"rgb(12, 117, 236)"}}
                >Login</Button>
            </div> 
        </div>
    );
}

export default Login;