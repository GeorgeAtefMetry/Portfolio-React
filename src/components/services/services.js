import React from 'react';
import classes from './services.module.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../card/card';
import CV from '../../files/George atef (3).pdf'
import {themeContext} from '../../context'
import { useContext } from "react";
import { motion } from "framer-motion"
const Services = () => {
    const transition = {duration : 2, type : 'spring'}
    
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className={classes.services} id="Services">
            <div className={classes.awesome}>
                <span style={{color : darkMode ? 'white' : ''}}>My Awesome</span>
                <span>Services</span>
                <span style={{color : darkMode ? 'white' : ''}}>
                    This My Services I Do <br/> & The Technologies I USE
                </span>
                <a href={CV} download>
                    <button className={classes.servicesButton + ' button'}>Download CV</button>
                </a>
                <div className={classes.blur} style={{backgroundColor:'rgb(248 255 198)',left:'36rem',top:'-5rem'}}></div>
                <div className={classes.blur} style={{backgroundColor:'var(--purple)',left:'0rem',top:'5rem'}}></div>
            </div>
            <div className={classes.cards}>
                <motion.div 
                    whileInView = {{left : '35rem'}}
                    initial = {{left : '30rem'}}
                    transition = {transition}
                    style={{left:'2rem',top:'2rem'}}
                    className = {classes.card}
                    >
                    <Card
                    emoj= {HeartEmoji}
                    heading = {'Developer'}
                    detail = {'HTML, CSS, JavaScript, SASS, Bootstrap, AJAX, and React'}
                    />
                    
                </motion.div>
                <motion.div 
                    whileInView = {{left : '10rem'}}
                    initial = {{left : '15rem'}}
                    transition = {transition}
                    style={{left:'2rem',top:'-4rem'}}
                    className = {classes.card}
                    >
                    <Card
                        style={{left:'4rem',height:'22rem !important'}}
                        emoj= {HeartEmoji}
                        heading = {'Intern: ITI'}
                        detail = {'HTML & CSS, RWD, JavaScript / TypeScript, OOP, React, Angular, DB Fundamentals, Node JS, Firebase, Unit Testing, Package Tools'}
                        />
                </motion.div>   
            </div>
        </div>
    );
}

export default Services;
