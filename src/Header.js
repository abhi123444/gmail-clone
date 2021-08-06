import React from 'react';
import "./header.css";
import MenuIcons from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header(props) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signout = () =>{
        auth.signOut().then(() =>{
            dispatch(logout());
        })
    }
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcons />
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""/>
            </div>
            <div className="header_middle">
                <IconButton style={{padding:"6px",margin:"5px"}}>
                    <SearchIcon />
                </IconButton>
                <input type="text" placeholder="Search mail"/>
                <IconButton style={{padding:"6px",margin:"5px"}}>
                    <TuneIcon />
                </IconButton>
            </div>
            <div className="header_right">
                <IconButton style={{padding:"6px",margin:"5px"}}>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton style={{padding:"6px",margin:"5px"}}>
                    <SettingsIcon />
                </IconButton>
                <IconButton style={{padding:"6px",margin:"5px"}}>
                    <AppsIcon />
                </IconButton>
                <Avatar style={{cursor:"pointer"}} onClick={signout} src={user?.photoUrl}/>
            </div>
        </div>
    );
}

export default Header;