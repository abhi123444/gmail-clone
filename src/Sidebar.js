import React from 'react';
import './sidebar.css';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { Button, IconButton } from '@material-ui/core';
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { OpenMail } from './features/mailSlice';
function Sidebar(props) {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
           <Button
                startIcon={
                    <AddIcon 
                        fontSize="large"
                        style={{fontSize:"3em",padding:"0"}}
                    />}
                className="sidebar__compose"
                onClick={()=>dispatch(OpenMail())}
            >Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={239} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={14} />
            <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={14} />
            <SidebarOption Icon={SendIcon} title="Sent" number={14} />
            <SidebarOption Icon={InsertDriveFileIcon} title="Draft" number={14} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={14} />
            <div className="sidebar__footer">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Sidebar;