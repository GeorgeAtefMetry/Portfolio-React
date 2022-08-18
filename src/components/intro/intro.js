import React from 'react';
import classes from './intro.module.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import me from '../../img/me1.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoj from '../../img/glassesimoji.png'
import Floatingdiv from '../floatingdiv/floatingdiv';
import {themeContext} from '../../context'
import { useContext } from "react";
import { motion } from "framer-motion"
const Intro = () => {
    const transition = {duration : 2, type : 'spring'}

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode


    return (
        <div className={classes.intro} id="Intro">
            <div className={classes.left}>
                <div className={classes.name}> 
                    <span style={{color : darkMode ? 'white' : ''}}>Hi! I Am</span>
                    <span>George Atef</span>
                    <span>Frontend Developer Wih Good Experience In Web Designing and Developement</span>
                </div>
                <button className={classes.hireButton + ' button'}> Hire Me</button>
                <div className={classes.icons}>
                    <a href='https://github.com/GeorgeAtefMetry'><img src={Github}></img></a>
                    <a href='https://www.linkedin.com/in/george-atef-0a5bb6141/'><img src={LinkedIn}></img></a>
                </div>
            </div>
            <div className={classes.right}>
                <img src={Vector1}></img>
                <img src={Vector2}></img>
                <img src={me}></img>

                <motion.img 
                    initial = {{left:'-56%'}}
                    whileInView = {{left : '-14%'}}
                    transition = {transition}
                    className = {classes.emoji}

                src={glassesimoj}/>

                <motion.div
                    initial = {{left:'-36%'}}
                    whileInView = {{left : '64%'}}
                    transition = {transition} 
                    style={{top:'10%',left:'18%'}}
                    className = {classes.floatingDiv}
                    >
                    
                    <Floatingdiv image={Crown} txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div
                    initial = {{left:'-56%'}}
                    whileInView = {{left : '-14%'}}
                    transition = {transition}
                    style={{top:'70%',left:'-20%'}}
                    className = {classes.floatingDiv}
                    >
                    <Floatingdiv image={Crown} txt1='Framework' txt2='React'/>
                </motion.div>

                {/* Blur Divs */}
                <div className={classes.blur} style={{backgroundColor:'rgb(258 210 255)'}}></div>
                <div className={classes.blur} style={{backgroundColor:'#C1F5FF',top:'16rem',width:'21rem',height:'11rem',left:'-30%'}}></div>
            </div>
        </div>
    );
}

export default Intro;
