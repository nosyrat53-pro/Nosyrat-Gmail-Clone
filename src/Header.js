import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { signOut } from 'firebase/auth';
import { setUserLogout } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase' ;
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser) ;

    const signoutf = () => {

        signOut(auth)

        .then(() => {
            dispatch(setUserLogout()) ;
        })
        
        .catch(error => console.log(error)) ;  

    }

    return(
        <div className="header">
            <div className="header__left">
                <IconButton>   
                    <MenuIcon />
                </IconButton>
                <img 
                src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
                alt="" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCaret"/>
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                {user.photoURL? 
                <img 
                src={user?.photoURL} 
                alt="userImageAccount" 
                title="Log Out" 
                onClick={() => signoutf()}
                /> 
                : <AccountCircleIcon onClick={() => signoutf()} />}
                
            </div>
            
        </div>
    );
}

export default Header ;