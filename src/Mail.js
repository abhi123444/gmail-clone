import { IconButton } from '@material-ui/core';
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, Label, LabelImportant, MoreVert, Print, UnfoldMore, WatchLater } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MailSelected } from './features/mailSlice';
import './mail.css';
function Mail(props) {
    const history = useHistory();
    const selectedmail = useSelector(MailSelected);

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={()=> history.push("/")}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <CheckCircle />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div> 
            <div className="mail__body">
                <div className="body_mailHeader">
                    <h2>{selectedmail?.subject}</h2>
                    <LabelImportant className="mail__important"/>
                    <p>{selectedmail?.title}</p>
                    <p className="mail__time">{selectedmail?.time}</p>
                </div>
                <div className="mail__message"><p>{selectedmail?.description}</p></div>
            </div> 
        </div>
    );
}

export default Mail;