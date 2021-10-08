import React from 'react';
import './RowList.css';
import { Checkbox , IconButton } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectMail , selectOpenMail } from './features/mailSlice';


const RowList = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();

    return(
        <div className="emailrow" onClick={() => { 
            dispatch(selectMail({
                title: props.title ,
                messageTitle :props.messageTitle ,
                description: props.description ,
                time: props.time ,
                id: props.id 
            }));
            history.push('/mail') ;
            }}>

            <div className="emailrow__left">
                <Checkbox />

                <IconButton>
                    <StarIcon />
                </IconButton>

                <IconButton>
                    <LabelImportantIcon />
                </IconButton>

                <h4>{props.title}</h4>
            </div>

            <div className="emailrow__right">
                <div className="emailrow__message">
                    <h4>{props.messageTitle}
                    <span className="emailrow__description"> -{props.description}</span>
                    </h4>
                </div>
            </div>

            <p className="emailrow__time">{props.time}</p>

        </div>
    );
}

export default RowList ;