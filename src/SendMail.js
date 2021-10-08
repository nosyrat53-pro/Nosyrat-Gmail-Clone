import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form' ;
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux' ;
import { db } from './firebase';
import { collection , addDoc , serverTimestamp } from 'firebase/firestore';

const SendMail = (props) => {

    const { register , handleSubmit , formState: {errors} } = useForm();

    const dispatch = useDispatch();

    const onSubmit = async (data) => {

        try{
        await addDoc(collection(db , 'emails') , {
            email: data.email,
            subject: data.subject ,
            message: data.message ,
            timestamp: serverTimestamp() 
        });

        dispatch(closeSendMessage()) ;
    }catch(e) {
        console.log("Error while adding document:",e) ;
    }
        
    }

    return(
        <div className="sendmail">
    
            <div className="sendmail__header">
                <h3>New Message</h3>
                <CloseIcon 
                className="sendmail__close" 
                onClick={() => dispatch(closeSendMessage())}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="input">
                <input 
                type="email" 
                placeholder="To" 
                {...register('email' , {required: true} )}
                />
                {errors.email && <p>To is required</p>}
                </div>

                <div className="input">
                <input 
                type="text" 
                placeholder="Subject" 
                {...register('subject', { required: true})}
                />
                {errors.subject && <p>Subject is required</p>}
                </div>
                
                <div className="input">
                <input 
                type="text" 
                placeholder="Message..." 
                {...register('message', { required: true })}
                />
                {errors.message && <p>Message is required</p>}
                </div>

                <div className="sendmail__options">
                    <Button type="submit" variant="contained" color="primary">Send</Button>
                </div>

            </form>
        </div>
    );
}

export default SendMail ;