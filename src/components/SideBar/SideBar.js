import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import "./SideBar.css"

const SideBar = () => {
    return (
        <div className ="sidebar">
          <FontAwesomeIcon className ="fa-bars" icon = {faBars} ></FontAwesomeIcon>
        </div>
        
    )
}

export default SideBar
