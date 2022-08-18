import React from 'react';
import classes from './portfolio.module.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import animatedTemplate from '../../img/animatedTemplate.png'
import bootstrap from '../../img/bootstrap.png'
import calcReact from '../../img/calcReact.png'
import foodReact from '../../img/foodReact.png'
import moviesReact from '../../img/moviesReact.png'
import memoryGameJS from '../../img/memoryGameJS.png'
import vanillaJS from '../../img/vanillaJS.png'
import Xcite from '../../img/xcite.png'
import {themeContext} from '../../context'
import { useContext } from "react";
const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
<div className={classes.portfolio} id="Projects" >
            <span  style={{color : darkMode ? 'white' : ''}}>Recent</span>
            <span>Projects</span>

            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className={classes.portfolioSider}
            >
                <SwiperSlide className={classes.swiperSlide}>
                    <p>X-Cite - React</p>
                    <img src={Xcite}></img>
                    
                    <a href='https://georgeatefmetry.github.io/X-Cite-User/' style={{textDecoration:'none'}}><span>Live✨</span></a>
                    <a href='https://github.com/GeorgeAtefMetry/X-Cite-User' style={{textDecoration:'none'}}><span>Code🧑🏿‍💻</span></a>
                        
                </SwiperSlide>
                <SwiperSlide className={classes.swiperSlide}>
                    <p>Movies Site - React</p>
                    <img src={moviesReact}></img>
                    
                    <a href='https://georgeatefmetry.github.io/Movies-React' style={{textDecoration:'none'}}><span>Live✨</span></a>
                    <a href='https://github.com/GeorgeAtefMetry/Movies-React' style={{textDecoration:'none'}}><span>Code🧑🏿‍💻</span></a>
                        
                </SwiperSlide>
                <SwiperSlide  className={classes.swiperSlide}>
                    <p>Food Site - React</p>
                    <img src={foodReact}></img>
                    
                    <a href='https://georgeatefmetry.github.io/Food-Site---React/' style={{textDecoration:'none'}}><span>Live✨</span></a>
                    <a href='https://github.com/GeorgeAtefMetry/Food-Site---React' style={{textDecoration:'none'}}><span>Code🧑🏿‍💻</span></a>
                </SwiperSlide>
                <SwiperSlide  className={classes.swiperSlide}>
                    <p>Calculator - React</p>
                    <img src={calcReact}></img>
                    
                    <a href='https://georgeatefmetry.github.io/Calculator-React-/' style={{textDecoration:'none'}}><span>Live✨</span></a>
                    <a href='https://github.com/GeorgeAtefMetry/Calculator-React-' style={{textDecoration:'none'}}><span>Code🧑🏿‍💻</span></a>
                </SwiperSlide>
                <SwiperSlide  className={classes.swiperSlide}>
                    <p>Template Bootstrap</p>  
                    <img src={animatedTemplate}></img>
                    
                    <a href='https://georgeatefmetry.github.io/Template-2021/' style={{textDecoration:'none'}}><span>Live✨</span></a>
                    <a href='https://github.com/GeorgeAtefMetry/Template-2021' style={{textDecoration:'none'}}><span>Code🧑🏿‍💻</span></a>
                </SwiperSlide>
                <SwiperSlide  className={classes.swiperSlide}>
                    <p>Site Using Vanilla JS</p>
                    <img src={vanillaJS}></img>
                    
                    <a href='https://georgeatefmetry.github.io/Site-Vanilla-JS-/' style={{textDecoration:'none'}}><span>Live✨</span></a>
                    <a href='https://github.com/GeorgeAtefMetry/Site-Vanilla-JS-' style={{textDecoration:'none'}}><span>Code🧑🏿‍💻</span></a>
                </SwiperSlide>
                <SwiperSlide  className={classes.swiperSlide}>
                    <p>Template</p>
                    <img src={bootstrap}></img>
                    
                    <a href='https://georgeatefmetry.github.io/Site-Using-Bootstrap/' style={{textDecoration:'none'}}><span>Live✨</span></a>
                    <a href='https://github.com/GeorgeAtefMetry/Site-Using-Bootstrap' style={{textDecoration:'none'}}><span>Code🧑🏿‍💻</span></a>
                </SwiperSlide>
                <SwiperSlide  className={classes.swiperSlide}>
                    <p>Memory Game Js</p>
                    <img src={memoryGameJS}></img>
                    
                    <a href='https://georgeatefmetry.github.io/Memory-Game-JS-/' style={{textDecoration:'none'}}><span>Live✨</span></a>
                    <a href='https://github.com/GeorgeAtefMetry/Memory-Game-JS-' style={{textDecoration:'none'}}><span>Code🧑🏿‍💻</span></a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Portfolio;
