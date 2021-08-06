import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import './sendmail.css';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { CloseMail } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';
function SendMail() {
    const { register, handleSubmit,watch, formState: { errors }} = useForm();
    const dispatch = useDispatch();
    const onSubmit = (formdata) =>{
        
        db.collection('emails').add({
            to:formdata.to,
            subject:formdata.subject,
            message:formdata.message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(CloseMail());
    }
    return (
        <div className="sendmail">
            <div className="sendmail__header">
                <h3>New Message</h3>
                <Close className="sendmail__close" onClick={()=>dispatch(CloseMail())}/>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to" 
                    placeholder="To" 
                    type="text" 
                    
                    {...register("to", {
                      required: true,
                    })}   
                />
                {errors.to && <p className="sendmail_errors">To is required</p>}
                <input 
                    name="subject" 
                    placeholder="Subject" 
                    type="text" 
                    
                    {...register("subject", {
                      required: true,
                    })} />
                 {errors.subject && <p className="sendmail_errors">Subject is required</p>}
                <textarea 
                    name="message" 
                    placeholder="Message.."
                    type="text" 
                    className="sendmail_message" 
                    
                    {...register("message", {
                      required: true,
                    })}/>
                 {errors.message && <p className="sendmail_errors">Message is required</p>}
                <div className="sendmail_options">
                    <Button className="sendmail__send" type="submit">Send</Button>
                    {errors.message && errors.message.message}
                </div>
            </form>
        </div>
    );
}

export default SendMail;