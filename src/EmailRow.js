import { Checkbox, IconButton } from '@material-ui/core';
import { DragIndicator, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './emailrow.css'
import { SelectMail } from './features/mailSlice';
function EmailRow({id, title, subject, description, time}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openmail = () => {
        dispatch(
            SelectMail({
                id,
                title,
                subject,
                description,
                time
            })
        );
        history.push("/mail")
    }
    return (
        <div onClick={openmail} className="emailRow">
            <div className="emailRow__options">
                <DragIndicator style={{color:'whitesmoke'}}/>
                <Checkbox style={{left:'-10px'}} />
                <IconButton style={{left:'-20px'}} >
                    <StarBorderOutlined />
                </IconButton>
            </div>
            <h3 className="emailRow__title"> {title}</h3>
            <div className="emailRow__message">
                <h4>{subject}{" - "}
                    <span className="emailrow_description">
                        {description}
                    </span>
                </h4>
            </div>
            <div className="emailRow__time">{time}</div>
        </div>
    );
}

export default EmailRow;