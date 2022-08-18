import React from 'react';
import classes from './toggle.module.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../context';
import { useContext } from 'react';

const Toggle = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const handleClick = () => {
        theme.dispatch({type:'toggle'})
    }
    return (
        <div className={classes.toggle} onClick = {handleClick}>

            <Moon></Moon>
            <Sun></Sun>
            <div className={classes.toggleBtn}
                
                style={darkMode ? {left : '2px'} : {right: '2px'}}
            > </div>

        </div>
    );
}

export default Toggle;
