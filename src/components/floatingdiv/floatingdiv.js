import React from 'react';
import classes from './floatingdiv.module.css'

import {themeContext} from '../../context'
import { useContext } from "react";

const Floatingdiv = ({image, txt1, txt2}) => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div>
            <div className={classes.Floatingdiv}>
                <img src={image}></img>
                <span style={{color : darkMode ? 'black' : ''}}>
                    {txt1}
                    <br/>
                    {txt2}
                </span>
            </div>
        </div>
    );
}

export default Floatingdiv;
