import React from 'react';
import classes from './works.module.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Khamsat from '../../img/khamsat.jpg'
import Mostaql from '../../img/Mostaql.png'
import Freelance from '../../img/freelance.png'
import {themeContext} from '../../context'
import { useContext } from "react";
import { motion } from "framer-motion"

const Works = () => {
    const transition = {duration : 3.5, type : 'spring'}

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className={classes.works} id="ًWorks">
            <div className={classes.awesome}>
                <span style={{color : darkMode ? 'white' : ''}}>Works For All Of These</span>
                <span>Brands</span>
                    <button className={classes.servicesButton + ' button'}>Hire Me</button>
                <div className={classes.blur} style={{backgroundColor:'var(--purple',left:'36rem',top:'-5rem'}}></div>
                <div className={classes.blur} style={{backgroundColor:'rgb(248 255 198)',left:'0rem',top:'5rem'}}></div>
            </div>


            <div className={classes.right}>
                <motion.div 
                initial = {{rotate : 65}}
                whileInView = {{rotate : 0}}
                viewport = {{margin : "-40px"}}
                transition = {transition}

                className={classes.mainCircle}>
                    <div className={`${classes.secCircle} ${classes.khamsat}`}>
                        <a href='https://khamsat.com/user/georgeatefmetry'><img src={Khamsat}  style={{borderRadius:'50%'}}></img></a>
                        <p>Go Khamsat Account</p>
                    </div>
                    <div className={`${classes.secCircle} ${classes.fiverr}`}>
                        <a href='https://www.fiverr.com/georgeatefmetry?up_rollout=true'><img src={Fiverr}></img></a>
                        <p>Go Fiverr Account</p>
                    </div>
                    <div className={`${classes.secCircle} ${classes.upwork}`}>
                        <a href='https://www.upwork.com/freelancers/~017aeb799c87a058a3'><img src={Upwork} style={{width:'4rem'}}></img></a>
                        <p>Go Upwork Account</p>
                    </div>
                    <div className={`${classes.secCircle} ${classes.mostaql}`}>
                        <a href='https://mostaql.com/u/GeorgeAtefMetry'><img src={Mostaql} style={{width:'5rem'}}></img></a>
                        <p>Go Mostaql Account</p>
                    </div>
                    <div className={`${classes.secCircle} ${classes.freelance}`}>
                        <a href='https://www.freelancer.com/u/GeorgeAtefMetry'><img src={Freelance} style={{width:'5rem',marginTop:'1rem'}}></img></a>
                        <p>Go Freelance Account</p>
                    </div>

                </motion.div>
                    <motion.div
                        initial = {{rotate : -185}}
                        whileInView = {{rotate : 35}}
                        viewport = {{margin : "-30px"}}
                        transition = {transition} 
                            className={`${classes.backCircle} ${classes.BlueCircle}`}> </motion.div>
                    <motion.div
                        initial = {{rotate : 25}}
                        whileInView = {{rotate : 0}}
                        viewport = {{margin : "-80px"}}
                        transition = {transition}
                            className={`${classes.backCircle} ${classes.YellowCircle}`}> </motion.div>
            </div>


        </div>
    );
}

export default Works;
