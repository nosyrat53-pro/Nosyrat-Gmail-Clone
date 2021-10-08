import React from 'react';
import './SideBarOption.css';

const SideBarOption = (props) => {
    return(
        <div className={`sidebarOption ${props.selected && "sidebarOption--active"}`}>
            {props.Icon}
            <h3>{props.title}</h3>
            <p>{props.number}</p>
        </div>
    );
}

export default SideBarOption ;