import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button' ;
import { auth , provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux' ;
import { setUserLogin } from './features/userSlice' ;

const Login = (props) => {

    const dispatch = useDispatch();

    const signin = () => {
        signInWithPopup(auth , provider).then( (result) => {

            dispatch(setUserLogin({...result.user}))
        }).catch( (error) => {
            console.log(error) ;
        })
    }

    return(
        <div className="login">
            <div className="login__content">
                    <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
                    alt="" 
                    className="login__image"/>
                    <Button 
                    onClick={() => signin()}
                    variant="contained" 
                    color="primary" 
                    className="login__button"
                    >Login</Button>
            </div>
        </div>
    );
}

export default Login;