import React from 'react';
    
import {themeContext} from '../../context'
import { useContext } from "react";
import classes from './card.module.css'
const Card = ({emoj, heading, detail}) => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className={classes.card} >
            <img src={emoj}></img>
            <span >{heading}</span>
            <span style={{color : darkMode ? 'white' : ''}}>{detail}</span>
        </div>
    );
}

export default Card;
