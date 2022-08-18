import React from 'react';
import classes from './experience.module.css'
import {themeContext} from '../../context'
import { useContext } from "react";

const Experience = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className={classes.experience} id="Experience">
            <div style={{zIndex : darkMode ? '1' : ''}} className={classes.achievements}>
                <div className={classes.circleTop}>
                    <div style={{color : darkMode ? 'black' : ''}} className={classes.circle}>
                    +1
                    </div>
                </div>
                <span style={{color : darkMode ? 'white' : ''}}>Years</span>
                <span>Experience</span>
            </div>
            <div style={{zIndex : darkMode ? '1' : ''}} className={classes.achievements}>
                <div className={classes.circleTop}>
                    <div style={{color : darkMode ? 'black' : ''}} className={classes.circle}>
                        +7
                    </div>
                </div>
                <span style={{color : darkMode ? 'white' : ''}}>Completed</span>
                <span>Projects</span>
            </div>
        </div>
    );
}

export default Experience;
