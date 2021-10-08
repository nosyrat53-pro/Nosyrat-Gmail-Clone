import React , { useState , useEffect } from 'react';
import './EmailList.css';
import { Checkbox , IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RedoIcon from '@material-ui/icons/Redo';
import ChevronLeftIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ArrowForwardIos';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';
import GroupIcon from '@material-ui/icons/Group';
import InboxIcon from '@material-ui/icons/Inbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RowList from './RowList';
import { onSnapshot , collection , orderBy  } from 'firebase/firestore';
import { db } from './firebase';


const EmailList = (props) => {

    const [messages,setMessages] = useState([]) ;
    
    useEffect( async () => {

        const  querysnap = await onSnapshot(collection(db , 'emails'), orderBy('timestamp') , (data) => {
            var msgs = [] ;
            data.docs.forEach( (doc) => {
                msgs.push({...doc.data() , id: doc.id});
            })

            setMessages(msgs) ;
        });

    } , []);

    return(
        <div className="emailList">

            <div className="emailList__settings">

                <div className="emailList__settingsLeft">
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>

            </div>

            <div className="emailList__section">

                <Section Icon={<InboxIcon />} text="Primary" color="red" selected />
                <Section Icon={<GroupIcon />} text="social" color="blue"/>
                <Section Icon={<LocalOfferIcon />} text="Promotions" color="green"/>

            </div>

            <div className="emailList__list">
            
            {messages && messages.map(msg => {
                return(
                    <RowList 
                    title={"Twitch"}
                    messageTitle={msg.subject}
                    description={msg.message}
                    time={new Date(msg.timestamp?.seconds * 1000).toUTCString()}
                    key={msg.id}
                    id={msg.id}
                    />
                );
            })}
               
            </div>

        </div>
    );
}

export default EmailList ;