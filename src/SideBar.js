import { Button } from '@material-ui/core';
import React from 'react';
import './SideBar.css';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SideBarOption';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import CallIcon from '@material-ui/icons/Call';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';   

const SideBar = () => {

    const dispatch = useDispatch();

    return(
        <div className="sidebar">
            <Button 
            onClick={() => dispatch(openSendMessage())}
            startIcon={<AddIcon fontSize="large"/>} 
            className="sidebar__compose"
            >compose</Button>

            <SidebarOption Icon={<InboxIcon />} title="Inbox" number="53" selected />
            <SidebarOption Icon={<StarIcon />} title="Starred" number="53" />
            <SidebarOption Icon={<AccessTimeIcon />} title="Snoozed" number="53" />
            <SidebarOption Icon={<LabelImportantIcon />} title="Important" number="53" />
            <SidebarOption Icon={<NearMeIcon />} title="Sent" number="53" />
            <SidebarOption Icon={<NoteIcon />} title="Drafts" number="53" />
            <SidebarOption Icon={<ExpandMoreIcon />} title="More" number="53" />

            <div className="sidebar__photos">
                <IconButton>
                    <PersonIcon />
                </IconButton>

                <IconButton>
                    <DuoIcon />
                </IconButton>

                <IconButton>
                    <CallIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default SideBar ;