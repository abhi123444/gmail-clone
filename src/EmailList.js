import { Checkbox, IconButton } from '@material-ui/core';
import { ArrowDropDown, ArrowLeft, ArrowRight, LocalOffer, MoreVert, People, Refresh } from '@material-ui/icons';
import Inbox from '@material-ui/icons/Inbox';
import React, { useEffect, useState } from 'react';
import './emaillist.css';
import EmailRow from './EmailRow';
import { db } from './firebase';
import Section from './Section';

function EmailList(props) {
    const [emails,setEmails] = useState([]);

    useEffect(() => {
        db
        .collection('emails')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot => setEmails(snapshot.docs.map((doc) =>({
            id:doc.id,
            data:doc.data(),
        }))))
    }, []);

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Refresh />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ArrowLeft />
                    </IconButton>
                    <IconButton>
                        <ArrowRight />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={Inbox} title="Primary" color="#c04b37" selected = {true}/>
                <Section Icon={People} title="Social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="Promotions" color="green" />
            </div>
            <div className="emailList_List">
                {emails.map(({id,data:{to,subject,message,timestamp}}) => (
                    <EmailRow 
                    key={id}
                    id={id}
                    title={to}
                    subject={subject} 
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}

            </div>
        </div>
    );
}

export default EmailList;